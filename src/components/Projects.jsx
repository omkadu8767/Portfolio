import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

export const Projects = () => {
    const projects = [
        {
            title: 'InternHQ',
            description: 'InternHQ is a comprehensive full-stack internship management platform built with the MEVN stack (MongoDB, Express.js, Vue.js, Node.js). It enables admins to create tasks, assign them to interns, track submissions, and evaluate performance with detailed analytics and leaderboards for insights.',
            image: '/InternHQ.png',
            liveLink: 'https://internhq-frontend.onrender.com/',
            githubLink: 'https://github.com/omkadu8767/InternHQ',
            tech: ['Vue.js', 'Vuetify', 'JWT', 'JavaScript', 'Node.js', 'Express', 'MongoDB']
        },
        {
            title: 'Resume-Scorer',
            description: 'A React-based web application designed to streamline resume evaluation using Natural Language Processing (NLP) techniques. It provides users with actionable insights to improve their resumes and helps hiring teams assess candidate fit more efficiently.',
            image: '/ResumeScorer.png',
            liveLink: 'https://resume-scorer-phi.vercel.app/',
            githubLink: 'https://github.com/omkadu8767/Resume-Scorer',
            tech: ['React.js', 'Tailwind CSS', 'Gemini LLM API by Google', 'NLP Library']
        },
        {
            title: 'Warehouse Management System',
            description: 'A web-based warehouse management system built with Node.js and MySQL, enabling efficient tracking of racks, categories, and items with support for barcode-based inventory operations.',
            image: '/warehouse.png',
            liveLink: 'https://warehouse-management-whjr.onrender.com/',
            githubLink: 'https://github.com/omkadu8767/Warehouse_Management',
            tech: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'Node.js', 'Express.js', 'PlanetScale (MySQL DBaaS)', 'Aiven (Cloud Infrastructure for DBs)']
        },
        {
            title: 'Swastha Bharat Portal',
            description: 'A unified digital health platform providing access to government-approved medicines, personalized prescriptions, nearby pharmacy suggestions, dose reminders, and easy appointment booking.',
            image: '/medlogo.png',
            liveLink: 'https://swastha-bharat-portal.onrender.com/',
            githubLink: 'https://github.com/omkadu8767/Swastha-Bharat-Portal',
            tech: ['React.js', 'Vite', 'Tailwind CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB']
        }
    ];

    return (
        <section id="projects" className="py-20 px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Projects
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden hover:border-blue-500 transition-all duration-300 group hover:transform hover:scale-105"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3">
                                    <Button
                                        asChild
                                        variant="outline"
                                        size="sm"
                                        className="bg-transparent border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
                                    >
                                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink size={16} className="mr-2" />
                                            Live Demo
                                        </a>
                                    </Button>
                                    <Button
                                        asChild
                                        variant="outline"
                                        size="sm"
                                        className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-600"
                                    >
                                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                            <Github size={16} className="mr-2" />
                                            Code
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};