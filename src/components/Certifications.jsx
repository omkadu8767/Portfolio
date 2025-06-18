import React from 'react';
import { ExternalLink, Award } from 'lucide-react';

export const Certifications = () => {
    const certifications = [
        {
            name: 'Programming in Java',
            organization: 'NPTEL',
            date: '2023',
            link: 'https://drive.google.com/file/d/1RieHweveFrcOWFdrMjxVTcVRgrLtuhJ8/view?usp=sharing',
            logo: '/nptel.jpg'
        },
        {
            name: 'Data Structures and Algorithms (DSA) For Campus Placements',
            organization: 'ExcelR',
            date: '2024',
            link: 'https://drive.google.com/file/d/1ulIcTCmR7AGsmQmb3cGw4bsdQB4HmKfz/view?usp=sharing',
            logo: '/excelr.jpg'
        },
        {
            name: 'Postman API Fundamentals Student Expert',
            organization: 'Postman',
            date: '2024',
            link: 'https://drive.google.com/file/d/13tABDCjq2ZnxjvNrsZq-IwUMKsXTdjW9/view?usp=sharing',
            logo: '/postman.jpg'
        },
        {
            name: ' Fundamentals of Digital Marketing',
            organization: 'Google',
            date: '2023',
            link: 'https://drive.google.com/file/d/1mX1s1OC0nF0wrnAciv4XNWHUS49e09MH/view?usp=sharing',
            logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop'
        },
        // {
        //     name: 'JavaScript Algorithms',
        //     organization: 'HackerRank',
        //     date: '2022',
        //     link: 'https://hackerrank.com/',
        //     logo: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=100&h=100&fit=crop'
        // },
        // {
        //     name: 'MongoDB Developer',
        //     organization: 'MongoDB University',
        //     date: '2021',
        //     link: 'https://university.mongodb.com/',
        //     logo: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=100&h=100&fit=crop'
        // }
    ];

    return (
        <section id="certifications" className="py-20 px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Certifications
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 group"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-700">
                                    <img
                                        src={cert.logo}
                                        alt={cert.organization}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
                                        {cert.name}
                                    </h3>
                                    <p className="text-blue-400 text-sm font-medium">{cert.organization}</p>
                                    <p className="text-gray-400 text-sm">{cert.date}</p>
                                </div>
                            </div>

                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm"
                            >
                                <Award size={16} className="mr-2" />
                                View Certificate
                                <ExternalLink size={14} className="ml-1" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};