import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

export const Internships = () => {
    const internships = [
        {
            company: 'ApexaIQ Pvt. Ltd',
            logo: '/apexa.png',
            position: 'Technical Intern',
            duration: 'Feb 2025 - Mar 2025 & Aug 2025 - Sep 2025',
            location: 'Shegaon, Maharashtra',
            workDone: [
                'Built InternHQ task management system using Vue.js, Vuetify, Node.js, MongoDB, and JWT',
                'Developed Python Selenium scripts for web scraping and automation',
                'Explored DevOps concepts with Git, Docker, and Postman',
                'Gained practical experience in full‑stack development, software testing, and team collaboration through code reviews and daily project discussions.'
            ]
        },
        {
            company: 'Friends of Animal (NGO)',
            logo: '/logo-foa.jpg',
            position: 'Frontend Intern',
            duration: 'Feb 2024 – Oct 2024',
            location: 'Shegaon, Maharashtra',
            workDone: [
                'Collaborated with a team to design and implement a platform for animal enthusiasts to share blogs, upload images, organize events, raise funds, and support stray animals using ReactJS',
                'Designed and developed user-friendly front-end dashboards for schools and administrators, streamlining event creation, organization, and management to improve platform functionality and user engagement',
                'Implemented responsive design practices using Tailwind CSS and Media Queries, ensuring seamless user experience across desktop, tablet, and mobile devices.',
                'Designed and developed multiple role-based dashboards (Admin, Student, Evaluator, etc.) to provide tailored user experiences and access controls, enhancing platform usability and functionality.'
            ]
        },
        // {
        //     company: 'Digital Agency',
        //     logo: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=100&h=100&fit=crop',
        //     position: 'Web Developer Intern',
        //     duration: 'Jun 2022 - Aug 2022',
        //     location: 'Remote',
        //     workDone: [
        //         'Created custom WordPress themes and plugins',
        //         'Implemented responsive designs for client websites',
        //         'Optimized websites for SEO and performance',
        //         'Collaborated with clients to gather requirements and feedback'
        //     ]
        // }
    ];

    return (
        <section id="internships" className="py-20 px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Internships
                </h2>

                <div className="space-y-8">
                    {internships.map((internship, index) => (
                        <div
                            key={index}
                            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex items-start gap-4 md:flex-1">
                                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-700">
                                        <img
                                            src={internship.logo}
                                            alt={internship.company}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-white mb-1">{internship.position}</h3>
                                        <p className="text-blue-400 text-lg font-medium mb-2">{internship.company}</p>
                                        <div className="flex flex-col sm:flex-row gap-2 text-gray-400 text-sm">
                                            <div className="flex items-center">
                                                <Calendar size={16} className="mr-1" />
                                                {internship.duration}
                                            </div>
                                            <div className="flex items-center">
                                                <MapPin size={16} className="mr-1" />
                                                {internship.location}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="md:flex-1">
                                    <h4 className="text-lg font-medium text-white mb-3">Key Contributions:</h4>
                                    <ul className="space-y-2">
                                        {internship.workDone.map((work, workIndex) => (
                                            <li key={workIndex} className="text-gray-300 flex items-start">
                                                <span className="text-blue-400 mr-3 mt-1.5">•</span>
                                                {work}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};