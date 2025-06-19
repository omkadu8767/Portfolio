import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailjs from 'emailjs-com';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { Spinner } from './Spinner';
import { SpinnerOverlay } from './SpinnerOverlay';

export const Contact = () => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userId = import.meta.env.VITE_EMAILJS_USER_ID;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const formRef = useRef();
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs.sendForm(
            serviceId,    // EmailJS service id
            templateId,   //  EmailJS template id
            formRef.current,
            userId          // EmailJS public key
        )
            .then(() => {
                setLoading(false);
                // alert('Message sent! Thank you for contacting me');
                toast.success('Message sent! Thank you for contacting me', { position: "top-right" });
                setFormData({ name: '', email: '', message: '' });
            }, () => {
                setLoading(false);
                toast.error('Failed to send message.', { position: "top-right" });
            });
    };

    return (
        <section id="contact" className="py-20 px-4 relative z-10">
            {loading && <SpinnerOverlay />}
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Get In Touch
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            I'm always interested in new opportunities and exciting projects.
                            Whether you have a question or just want to say hi, feel free to reach out!
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="bg-blue-500/20 p-3 rounded-full">
                                    <Mail className="text-blue-400" size={20} />
                                </div>
                                <a href='mailto:kaduom444@gmail.com'><div>
                                    <p className="text-gray-400 text-sm">Email</p>
                                    <p className="text-white">kaduom444@gmail.com</p>
                                </div></a>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-green-500/20 p-3 rounded-full">
                                    <Phone className="text-green-400" size={20} />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Phone</p>
                                    <p className="text-white">+91 8767488109</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-purple-500/20 p-3 rounded-full">
                                    <MapPin className="text-purple-400" size={20} />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Location</p>
                                    <p className="text-white">Amravati, Maharashtra, India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    Name
                                </label>
                                <Input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="bg-gray-900/50 border-gray-600 text-white focus:border-blue-400"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Email
                                </label>
                                <Input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="bg-gray-900/50 border-gray-600 text-white focus:border-blue-400"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Message
                                </label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="bg-gray-900/50 border-gray-600 text-white focus:border-blue-400 resize-none"
                                    placeholder="Your message..."
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white" disabled={loading}
                            >
                                {loading ? <Spinner /> : <><Send size={18} className="mr-2" />Send Message</>}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};