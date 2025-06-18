import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#projects', label: 'Projects' },
        { href: '#certifications', label: 'Certifications' },
        { href: '#internships', label: 'Internships' },
        { href: '#education', label: 'Education' },
        { href: '#hackathons', label: 'Hackathons' },
        { href: '#contact', label: 'Contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="text-xl  cursor-pointer font-bold text-blue-400"> <a href="#home">Portfolio</a></div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-300 hover:text-blue-400"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden py-4 border-t border-gray-800">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="block py-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};