import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code, Paintbrush, Figma } from 'lucide-react';
import { projectsData } from '../data/projectsData';

const Projects: React.FC = () => {
    const [filter, setFilter] = useState<'all' | 'dev' | 'design'>('all');

    const handleViewProject = (id: string) => {
        window.location.hash = `#/project/${id}`;
    };

    const designIds = ['logo-design', 'wannasolo', 'learnify', 'tabler', 'zigzag', 'avenra'];

    const filteredProjects = projectsData.filter(project => {
        if (filter === 'all') return true;
        if (filter === 'dev') return !designIds.includes(project.id);
        if (filter === 'design') return designIds.includes(project.id);
        return true;
    });

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="outfit gradient-text">Featured Works</h2>
                    <div className="section-line"></div>
                </div>

                {/* Filter Tabs */}
                <div className="projects-tabs" style={{ display: 'flex', gap: '0.75rem', marginBottom: '3rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button
                        onClick={() => setFilter('all')}
                        className={`skills-tab-btn outfit ${filter === 'all' ? 'active' : ''}`}
                        style={{
                            padding: '0.6rem 1.25rem',
                            borderRadius: '50px',
                            border: '1px solid var(--card-border)',
                            background: filter === 'all' ? 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))' : 'rgba(128,128,128,0.05)',
                            color: filter === 'all' ? '#fff' : 'var(--text-secondary)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            fontSize: '0.85rem',
                            fontWeight: '600',
                            boxShadow: filter === 'all' ? '0 4px 12px rgba(139, 92, 246, 0.25)' : 'none'
                        }}
                    >
                        Show All
                    </button>
                    <button
                        onClick={() => setFilter('dev')}
                        className={`skills-tab-btn outfit ${filter === 'dev' ? 'active' : ''}`}
                        style={{
                            padding: '0.6rem 1.25rem',
                            borderRadius: '50px',
                            border: '1px solid var(--card-border)',
                            background: filter === 'dev' ? 'var(--accent-primary)' : 'rgba(255,255,255,0.02)',
                            color: filter === 'dev' ? '#050505' : 'var(--text-secondary)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            fontSize: '0.85rem',
                            fontWeight: '600',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            boxShadow: filter === 'dev' ? '0 4px 15px rgba(139, 92, 246, 0.25)' : 'none'
                        }}
                    >
                        <Code size={13} color={filter === 'dev' ? '#050505' : 'var(--accent-primary)'} />
                        Software Development
                    </button>
                    <button
                        onClick={() => setFilter('design')}
                        className={`skills-tab-btn outfit ${filter === 'design' ? 'active' : ''}`}
                        style={{
                            padding: '0.6rem 1.25rem',
                            borderRadius: '50px',
                            border: '1px solid var(--card-border)',
                            background: filter === 'design' ? 'var(--accent-secondary)' : 'rgba(255,255,255,0.02)',
                            color: filter === 'design' ? '#050505' : 'var(--text-secondary)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            fontSize: '0.85rem',
                            fontWeight: '600',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            boxShadow: filter === 'design' ? '0 4px 15px rgba(6, 182, 212, 0.25)' : 'none'
                        }}
                    >
                        <Paintbrush size={13} color={filter === 'design' ? '#050505' : 'var(--accent-secondary)'} />
                        UI/UX & Branding
                    </button>
                </div>

                <motion.div 
                    layout
                    className="projects-grid"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => {
                            const isDesign = designIds.includes(project.id);
                            return (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    className="project-card glass"
                                    onClick={() => handleViewProject(project.id)}
                                    style={{ cursor: 'pointer', position: 'relative' }}
                                >
                                    {/* Category tag bubble */}
                                    <span 
                                        className="outfit"
                                        style={{
                                            position: 'absolute',
                                            top: '1rem',
                                            right: '1rem',
                                            background: 'rgba(5, 5, 5, 0.8)',
                                            backdropFilter: 'blur(8px)',
                                            WebkitBackdropFilter: 'blur(8px)',
                                            color: isDesign ? 'var(--accent-secondary)' : 'var(--accent-primary)',
                                            padding: '0.35rem 0.85rem',
                                            borderRadius: '50px',
                                            fontSize: '0.7rem',
                                            fontWeight: '700',
                                            border: '1px solid rgba(255, 255, 255, 0.08)',
                                            zIndex: 5,
                                            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)',
                                            letterSpacing: '0.04em',
                                            textTransform: 'uppercase'
                                        }}
                                    >
                                        {isDesign ? 'UI/UX & Branding' : 'Software Dev'}
                                    </span>

                                    <div className="project-card-pattern"></div>
                                    <div className="project-image">
                                        <img src={project.image} alt={project.title} />
                                    </div>
                                    <div
                                        className="project-content"
                                        style={{ '--project-image': `url(${project.image})` } as React.CSSProperties}
                                    >
                                        <h3>{project.title}</h3>
                                        <p className="truncated-desc" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', height: 'auto', maxHeight: '4.8em', opacity: 1, margin: '0.5rem 0 1rem' }}>
                                            {project.description}
                                        </p>
                                        
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleViewProject(project.id);
                                            }}
                                            className="see-more-btn"
                                            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', background: 'none', border: 'none', color: 'var(--accent-primary)', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', cursor: 'pointer' }}
                                        >
                                            View Case Study &rarr;
                                        </button>

                                        <div className="project-tech" style={{ marginTop: '1rem' }} onClick={(e) => e.stopPropagation()}>
                                            {project.tech.slice(0, 4).map((t, i) => (
                                                <span key={i} className="tech-tag">{t}</span>
                                            ))}
                                            {project.tech.length > 4 && (
                                                <span className="tech-tag">+{project.tech.length - 4}</span>
                                            )}
                                        </div>
                                        <div className="project-links" onClick={(e) => e.stopPropagation()}>
                                            {project.figma && (
                                                <a href={project.figma} target="_blank" rel="noopener noreferrer" className="link-icon" title="Figma Prototype">
                                                    <Figma size={20} />
                                                </a>
                                            )}
                                            {project.github && (
                                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-icon" title="GitHub Repository">
                                                    <Github size={20} />
                                                </a>
                                            )}
                                            {project.demo && project.demo !== '#' && (
                                                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="link-icon" title="Live Demo">
                                                    <ExternalLink size={20} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
