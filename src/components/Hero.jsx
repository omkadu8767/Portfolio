import { Button } from '@/components/ui/button';
import { Download, ExternalLink, Github, Linkedin } from 'lucide-react';

export const Hero = () => {
    const socialLinks = [
        { icon: Github, href: 'https://github.com/omkadu8767', label: 'GitHub' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/om-kadu-53305425a/', label: 'LinkedIn' }
        // { icon: ExternalLink, href: 'https://leetcode.com/yourusername', label: 'LeetCode' },
        // { icon: ExternalLink, href: 'https://hackerrank.com/yourusername', label: 'HackerRank' },
        // { icon: ExternalLink, href: 'https://geeksforgeeks.org/user/yourusername', label: 'GeeksforGeeks' },
    ];

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative z-10 px-4">
            <div className="text-center max-w-4xl mx-auto">
                <div className="mb-8">
                    <img
                        src="/Om Nilesh Kadu_CSE.png"
                        alt="Profile"
                        className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-400 shadow-lg shadow-blue-400/20"
                    />
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fade-in">
                    Om Kadu
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-fade-in">
                    Full Stack Developer & Java Enthusiast
                </p>

                <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in">
                    Final-year Computer Science student with strong problem-solving skills and the ability to quickly adapt to new technologies, seeking to contribute to impactful software development projects.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-gray-800 hover:bg-blue-600 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-400/20"
                            title={social.label}
                        >
                            <social.icon size={24} />
                        </a>
                    ))}
                </div>

                <a href='https://drive.google.com/file/d/1ldPq9-bLsZo0bVMt1YM4lqIoKQnKl05x/view?usp=sharing' target='_blank'><Button
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                    <Download className="mr-2" size={20} />
                    Download Resume
                </Button>
                </a>
            </div>
        </section>
    );
};