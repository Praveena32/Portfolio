import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code, Paintbrush, Figma, User, ChevronRight } from 'lucide-react';
import { projectsData } from '../data/projectsData';

const Projects: React.FC = () => {
    const [filter, setFilter] = useState<'all' | 'dev' | 'design'>('all');

    const handleViewProject = (id: string) => {
        window.location.hash = `#/project/${id}`;
    };

    const designIds = ['wannasolo', 'learnify', 'zigzag', 'avenra'];

    const filteredProjects = projectsData.filter(project => {
        if (filter === 'all') return true;
        if (filter === 'dev') return !designIds.includes(project.id);
        if (filter === 'design') return designIds.includes(project.id);
        return true;
    });

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <div className="section-header" style={{ marginBottom: '3.5rem' }}>
                    <h2 className="outfit gradient-text" style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                        Case Studies & Featured Works
                    </h2>
                    <div className="section-line"></div>
                </div>

                {/* Filter Tabs */}
                <div className="projects-tabs" style={{ display: 'flex', gap: '0.75rem', marginBottom: '3rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button
                        id="projects-filter-all-btn"
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
                        id="projects-filter-dev-btn"
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
                        id="projects-filter-design-btn"
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
                                            background: 'rgba(5, 5, 5, 0.85)',
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
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '0.35rem' }}>{project.title}</h3>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontStyle: 'italic', margin: '0 0 1rem', textShadow: 'none', fontWeight: '500' }}>
                                            {project.tagline}
                                        </p>

                                        {/* Project Role Badge */}
                                        <div className="project-role-badge" style={{ marginBottom: '0.75rem' }}>
                                            <span style={{ 
                                                display: 'inline-flex', 
                                                alignItems: 'center', 
                                                gap: '0.4rem', 
                                                background: 'rgba(6, 182, 212, 0.08)', 
                                                border: '1px solid rgba(6, 182, 212, 0.2)',
                                                color: 'var(--accent-secondary)', 
                                                padding: '0.3rem 0.75rem', 
                                                borderRadius: '6px',
                                                fontSize: '0.8rem',
                                                fontWeight: '600'
                                            }}>
                                                <User size={13} />
                                                Role: {project.details.role}
                                            </span>
                                        </div>

                                        {/* Tech Badges Row */}
                                        <div className="project-tech" style={{ marginTop: '0', marginBottom: '1.25rem', display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }} onClick={(e) => e.stopPropagation()}>
                                            {project.tech.slice(0, 3).map((t, i) => (
                                                <span key={i} className="tech-tag" style={{ fontSize: '0.75rem', padding: '0.15rem 0.5rem' }}>{t}</span>
                                            ))}
                                            {project.tech.length > 3 && (
                                                <span className="tech-tag" style={{ fontSize: '0.75rem', padding: '0.15rem 0.5rem' }}>+{project.tech.length - 3}</span>
                                            )}
                                        </div>
                                        
                                        {/* Footer CTAs and Icons */}
                                        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--card-border)' }}>
                                            <button
                                                id={`project-card-read-case-study-${project.id}`}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleViewProject(project.id);
                                                }}
                                                className="project-cta-btn main-cta outfit"
                                                style={{ 
                                                    flex: 1, 
                                                    display: 'inline-flex', 
                                                    alignItems: 'center', 
                                                    justifyContent: 'center',
                                                    gap: '0.35rem', 
                                                    background: 'rgba(139, 92, 246, 0.08)', 
                                                    border: '1px solid rgba(139, 92, 246, 0.25)', 
                                                    color: 'var(--text-primary)', 
                                                    fontSize: '0.82rem', 
                                                    fontWeight: '700', 
                                                    textTransform: 'uppercase', 
                                                    letterSpacing: '0.04em', 
                                                    cursor: 'pointer', 
                                                    padding: '0.5rem 0.8rem',
                                                    borderRadius: '8px',
                                                    transition: 'all 0.3s ease'
                                                }}
                                            >
                                                <span>Read Case Study</span>
                                                <ChevronRight size={14} />
                                            </button>

                                            <div className="project-links" onClick={(e) => e.stopPropagation()} style={{ display: 'flex', gap: '0.4rem', flexShrink: 0 }}>
                                                {project.figma && (
                                                    <a id={`project-card-figma-${project.id}`} href={project.figma} target="_blank" rel="noopener noreferrer" className="project-icon-btn figma-btn" title="Figma Prototype" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}>
                                                        <Figma size={15} />
                                                    </a>
                                                )}
                                                {project.github && (
                                                    <a id={`project-card-github-${project.id}`} href={project.github} target="_blank" rel="noopener noreferrer" className="project-icon-btn github-btn" title="GitHub Repository" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}>
                                                        <Github size={15} />
                                                    </a>
                                                )}
                                                {project.demo && project.demo !== '#' && (
                                                    <a id={`project-card-demo-${project.id}`} href={project.demo} target="_blank" rel="noopener noreferrer" className="project-icon-btn demo-btn" title="Live Demo" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}>
                                                        <ExternalLink size={15} />
                                                    </a>
                                                )}
                                            </div>
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
