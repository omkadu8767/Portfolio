import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export const Education = () => {
    const education = [
        {
            degree: 'Bachelor of Engineering in Computer Science and Engineering',
            institution: 'Shri Sant Gajanan Maharaj College of Engineering (SSGMCE)',
            duration: '2022 - 2026',
            cgpa: '8.58/10',
            location: 'Shegaon, Maharashtra',
            achievements: [
                'Technical Head at Computer Science Society',
                'DevOps Team Member at Google Developer Group SSGMCE',
                'Fab LAb Member and Mentor at SSGMCE',
                // 'Research paper published in IEEE conference'
            ],
            coursework: [
                'Data Structures & Algorithms',
                'OOPS',
                'Database Management Systems',
                'Software Engineering',
                'Machine Learning',
                'Web Technologies',
                'Computer Networks',
                'Operating Systems',
                'Theory of Computation'
            ]
        },
        {
            degree: 'Higher Secondary Education (Science)',
            institution: 'Shri Shivaji Science College',
            duration: '2020 - 2022',
            cgpa: '80.17%',
            location: 'Amravati, Maharashtra',
            achievements: [
                'Secured First Class with Distinction by scoring 80.17% in the Science stream',
                'Demonstrated strong proficiency in core subjects like Mathematics, Physics, and Computer Science',
                'Completed multiple online certifications in programming and web development alongside academics',
                // 'Valedictorian of graduating class'
            ],
            coursework: [
                'Mathematics',
                'Physics',
                'Chemistry',
                'Computer Science',
                'English'
            ]
        }
    ];

    return (
        <section id="education" className="py-20 px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Education
                </h2>

                <div className="space-y-8">
                    {education.map((edu, index) => (
                        <div
                            key={index}
                            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300"
                        >
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="md:col-span-2">
                                    <div className="flex items-start gap-3 mb-4">
                                        <GraduationCap className="text-blue-400 mt-1" size={24} />
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-1">{edu.degree}</h3>
                                            <p className="text-blue-400 text-lg font-medium">{edu.institution}</p>
                                            <div className="flex flex-col sm:flex-row gap-2 mt-2 text-gray-400 text-sm">
                                                <div className="flex items-center">
                                                    <Calendar size={16} className="mr-1" />
                                                    {edu.duration}
                                                </div>
                                                <div className="flex items-center">
                                                    <Award size={16} className="mr-1" />
                                                    CGPA: {edu.cgpa}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <h4 className="text-lg font-medium text-white mb-3">Key Achievements:</h4>
                                        <ul className="space-y-2">
                                            {edu.achievements.map((achievement, achIndex) => (
                                                <li key={achIndex} className="text-gray-300 flex items-start">
                                                    <span className="text-blue-400 mr-3 mt-1.5">•</span>
                                                    {achievement}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-lg font-medium text-white mb-3">Relevant Coursework:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {edu.coursework.map((course, courseIndex) => (
                                            <span
                                                key={courseIndex}
                                                className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-blue-600 transition-colors duration-200"
                                            >
                                                {course}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
    