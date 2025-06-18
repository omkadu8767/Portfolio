import React from 'react';
import { Trophy, Calendar, MapPin, Users } from 'lucide-react';

export const Hackathons = () => {
    const hackathons = [
        {
            name: 'Tech-Tesseract Hackathon',
            date: 'Mar 2024',
            location: 'Pune, India',
            position: '1st Place Winner',
            project: 'Swastha Bharat Portal',
            description: '"Developed a unified digital health platform providing access to government-approved medicines, personalized prescriptions, nearby pharmacy suggestions, dose reminders, and easy appointment booking.',
            tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Firebase', 'DialogFlow', 'Map API', 'Razorpay API'],
            teamSize: '3 members',
            prize: 'Swags and Goodies'
        },
        {
            name: 'Geo Spatial AI Hackathon (ISRO)',
            date: 'Aug 2024',
            location: 'Nagpur, India',
            position: 'Participant',
            project: 'Super-Resolution Satellite Imagery',
            description: 'Applied deep learning models to enhance LISS-3 satellite imagery into VHR outputs, increasing clarity and spatial detail using ESRGAN and QGIS.',
            tech: ['Python', 'ML','DL', 'QGIS', 'ESRGAN'],
            teamSize: '3 members',
            prize: 'Mentorship'
        },
        // {
        //     name: 'MLH Local Hack Day',
        //     date: 'Apr 2023',
        //     location: 'New York, NY',
        //     position: '2nd Place',
        //     project: 'StudyBuddy - AI Study Assistant',
        //     description: 'Built an AI-powered study companion that creates personalized quizzes and tracks learning progress.',
        //     tech: ['React', 'OpenAI API', 'Firebase', 'Tailwind CSS'],
        //     teamSize: '2 members',
        //     prize: '$5,000'
        // },
        // {
        //     name: 'HackTheNorth',
        //     date: 'Sep 2022',
        //     location: 'Waterloo, Canada',
        //     position: 'Top 10 Finalist',
        //     project: 'HealthConnect - Telemedicine Platform',
        //     description: 'Developed a comprehensive telemedicine platform connecting patients with healthcare providers.',
        //     tech: ['React', 'Node.js', 'WebRTC', 'PostgreSQL'],
        //     teamSize: '4 members',
        //     prize: 'Sponsor Recognition'
        // }
    ];

    return (
        <section id="hackathons" className="py-20 px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Hackathons
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {hackathons.map((hackathon, index) => (
                        <div
                            key={index}
                            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 group hover:transform hover:scale-105"
                        >
                            <div className="flex items-start gap-3 mb-4">
                                <Trophy className="text-yellow-400 mt-1" size={24} />
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
                                        {hackathon.name}
                                    </h3>
                                    <div className="flex items-center gap-4 text-gray-400 text-sm mb-2">
                                        <div className="flex items-center">
                                            <Calendar size={16} className="mr-1" />
                                            {hackathon.date}
                                        </div>
                                        <div className="flex items-center">
                                            <MapPin size={16} className="mr-1" />
                                            {hackathon.location}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 text-sm mb-3">
                                        <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded text-xs font-medium">
                                            {hackathon.position}
                                        </span>
                                        <div className="flex items-center text-gray-400">
                                            <Users size={16} className="mr-1" />
                                            {hackathon.teamSize}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-4">
                                <h4 className="text-lg font-medium text-blue-400 mb-2">{hackathon.project}</h4>
                                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                                    {hackathon.description}
                                </p>
                            </div>

                            <div className="mb-4">
                                <div className="flex flex-wrap gap-2">
                                    {hackathon.tech.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="text-sm">
                                <span className="text-gray-400">Prize: </span>
                                <span className="text-green-400 font-medium">{hackathon.prize}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};