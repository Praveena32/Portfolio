import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: 'Nivora – Mental Health App',
        description: 'A "Heal without Fear" platform providing anonymous support, mood tracking, and AI-driven mental health resources.',
        tech: ['React Native', 'Expo', 'TypeScript', 'Framer Motion'],
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    },
    {
        title: 'Dishvana',
        description: 'A premium culinary management system designed for seamless restaurant operations and enhanced dining experiences.',
        tech: ['Next.js', 'Tailwind CSS', 'PostgreSQL', 'Prisma'],
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    },
    {
        title: 'Wannasolo',
        description: 'A dedicated platform for solo adventurers, focusing on secure networking and community-driven travel insights.',
        tech: ['Flutter', 'Firebase', 'Dart', 'Google Maps API'],
        image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80',
    },
    {
        title: 'Industrial Supply Management',
        description: 'A comprehensive system for managing supply chains in industrial settings.',
        tech: ['React', 'Node.js', 'MongoDB'],
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    },
    {
        title: 'Smart Campus Portal',
        description: 'An interactive portal for University of Vavuniya students to manage academic tasks.',
        tech: ['TypeScript', 'Firebase', 'Vite'],
        image: 'https://images.unsplash.com/photo-1523050335192-ce67a276d11a?auto=format&fit=crop&w=800&q=80',
    },
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="outfit gradient-text">Featured Projects</h2>
                    <div className="section-line"></div>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="project-card glass"
                        >
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="tech-tag">{t}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href="#" className="link-icon"><Github size={20} /></a>
                                    <a href="#" className="link-icon"><ExternalLink size={20} /></a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
