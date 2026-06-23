import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Cpu, CheckCircle2, FileCode, ChevronLeft, ChevronRight, User, TrendingUp } from 'lucide-react';
import { projectsData } from '../data/projectsData';

interface ProjectDetailsProps {
    projectId: string;
    onBack: () => void;
}

// Custom Figma SVG icon in case lucide doesn't load it correctly, or for a colored premium look
const FigmaIcon = () => (
    <svg width="20" height="20" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 0C13.753 0 9.5 4.253 9.5 9.5C9.5 14.747 13.753 19 19 19C24.247 19 28.5 14.747 28.5 9.5C28.5 4.253 24.247 0 19 0Z" fill="#F24E1E"/>
        <path d="M9.5 19C4.253 19 0 23.253 0 28.5C0 33.747 4.253 38 9.5 38H19V19H9.5Z" fill="#A259FF"/>
        <path d="M19 19H28.5C33.747 19 38 14.747 38 9.5C38 4.253 33.747 0 28.5 0H19V19Z" fill="#FF7262"/>
        <path d="M19 38H28.5C33.747 38 38 33.747 38 28.5C38 23.253 33.747 19 28.5 19H19V38Z" fill="#1ABCFE"/>
        <path d="M9.5 38C4.253 38 0 42.253 0 47.5C0 52.747 4.253 57 9.5 57C14.747 57 19 52.747 19 47.5V38H9.5Z" fill="#0ACF83"/>
    </svg>
);

const ProjectCarousel: React.FC<{ images: string[]; isMobile?: boolean }> = ({ images, isMobile }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="project-carousel glass" style={{ padding: '2.5rem', borderRadius: '1.5rem', marginBottom: '2.5rem', position: 'relative' }}>
            <h2 className="outfit section-heading" style={{ marginBottom: '1.5rem', textAlign: isMobile ? 'center' : 'left' }}>Interface & Features Gallery</h2>
            <div className={`carousel-container-outer ${isMobile ? 'has-mobile-frame' : ''}`}>
                <div className={`carousel-view ${isMobile ? 'mobile-frame' : ''}`}>
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentIndex}
                            src={images[currentIndex]}
                            alt={`Screenshot ${currentIndex + 1}`}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.35, ease: 'easeInOut' }}
                            style={{ width: '100%', height: '100%', objectFit: isMobile ? 'cover' : 'contain', background: isMobile ? '#000' : 'rgba(5, 5, 5, 0.4)' }}
                        />
                    </AnimatePresence>

                    {!isMobile && (
                        <>
                            <button 
                                onClick={handlePrev} 
                                className="carousel-control prev-btn"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button 
                                onClick={handleNext} 
                                className="carousel-control next-btn"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </>
                    )}
                </div>

                {isMobile && (
                    <>
                        <button 
                            onClick={handlePrev} 
                            className="carousel-control prev-btn"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button 
                            onClick={handleNext} 
                            className="carousel-control next-btn"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </>
                )}
            </div>

            {/* Indicators */}
            <div className="carousel-indicators" style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        style={{
                            width: idx === currentIndex ? '28px' : '8px',
                            height: '8px',
                            borderRadius: '4px',
                            background: 'var(--accent-primary)',
                            opacity: idx === currentIndex ? 1 : 0.35,
                            border: 'none',
                            cursor: 'pointer'
                        }}
                    />
                ))}
            </div>
        </div>
    );
};


const ProjectDetails: React.FC<ProjectDetailsProps> = ({ projectId, onBack }) => {
    const project = projectsData.find(p => p.id === projectId);
    const isDesignProject = project?.id === 'wannasolo' || project?.id === 'learnify' || project?.id === 'zigzag' || project?.id === 'avenra';

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' as any });
    }, [projectId]);

    if (!project) {
        return (
            <div className="container" style={{ padding: '8rem 2rem', textAlign: 'center' }}>
                <h2 className="outfit">Project Not Found</h2>
                <p style={{ color: 'var(--text-secondary)', margin: '1.5rem 0' }}>The requested project case study could not be loaded.</p>
                <button onClick={onBack} className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                    <ArrowLeft size={16} /> Back to Projects
                </button>
            </div>
        );
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100 } }
    };

    const isYouTubeUrl = (url: string) => {
        return url.includes('youtube.com') || url.includes('youtu.be');
    };

    const getYouTubeEmbedUrl = (url: string) => {
        let videoId = '';
        if (url.includes('youtu.be/')) {
            videoId = url.split('youtu.be/')[1]?.split('?')[0];
        } else if (url.includes('v=')) {
            videoId = url.split('v=')[1]?.split('&')[0];
        } else if (url.includes('embed/')) {
            return url;
        }
        return `https://www.youtube.com/embed/${videoId}`;
    };

    return (
        <article className="project-detail-page">
            {/* Header Sticky Navigation */}
            <div className="detail-nav glass">
                <div className="container nav-container">
                    <button onClick={onBack} className="btn-back-home outfit">
                        <ArrowLeft size={18} /> Back to Portfolio
                    </button>
                    <span className="outfit detail-nav-title gradient-text">{project.title}</span>
                </div>
            </div>

            {/* Hero Section */}
            <header className="detail-hero" style={{ backgroundImage: `linear-gradient(rgba(5, 5, 5, 0.45), rgba(5, 5, 5, 0.95)), url(${project.image})` }}>
                <div className="container hero-container-inner">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hero-details-card"
                    >
                        <span className="tech-badge-primary outfit">CASE STUDY</span>
                        <h1 className="outfit">{project.title}</h1>
                        <p className="tagline outfit">{project.tagline}</p>

                        <div className="action-links">
                            {project.github && (
                                <motion.a 
                                    whileHover={{ scale: 1.05, y: -2 }} 
                                    whileTap={{ scale: 0.95 }} 
                                    href={project.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="btn-primary"
                                >
                                    <Github size={20} /> View Repository
                                </motion.a>
                            )}
                            {project.figma && (
                                <motion.a 
                                    whileHover={{ scale: 1.05, y: -2 }} 
                                    whileTap={{ scale: 0.95 }} 
                                    href={project.figma} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="btn-figma btn-secondary"
                                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}
                                >
                                    <FigmaIcon /> Figma Prototype
                                </motion.a>
                            )}
                            {project.demo && project.demo !== '#' && (
                                <motion.a 
                                    whileHover={{ scale: 1.05, y: -2 }} 
                                    whileTap={{ scale: 0.95 }} 
                                    href={project.demo} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="btn-secondary"
                                >
                                    <ExternalLink size={20} /> Live Deployment
                                </motion.a>
                            )}
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* Content Body Grid */}
            <main className="container">
                {project.video && (
                    <motion.section 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="detail-card glass video-walkthrough-card"
                        style={{ marginBottom: '2.5rem' }}
                    >
                        <h2 className="outfit section-heading" style={{ marginBottom: '1.5rem' }}>Project Walkthrough Demo</h2>
                        <div className="video-wrapper" style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: '1rem', overflow: 'hidden', border: '1px solid var(--card-border)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                            {isYouTubeUrl(project.video) ? (
                                <iframe
                                    src={getYouTubeEmbedUrl(project.video)}
                                    title="Project Walkthrough Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    style={{ width: '100%', height: '100%', border: 'none' }}
                                />
                            ) : (
                                <video 
                                    src={project.video} 
                                    controls 
                                    preload="metadata"
                                    playsInline 
                                    style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#000' }}
                                />
                            )}
                        </div>
                    </motion.section>
                )}

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="detail-grid"
                    style={{ marginBottom: '2.5rem' }}
                >
                    {/* Left Column: Case Study Main Sections */}
                    <div className="detail-col-main">
                        {isDesignProject ? (
                            <>
                                {/* Problem Statement */}
                                <motion.section variants={itemVariants} className="detail-card glass">
                                    <h2 className="outfit section-heading">Problem Statement</h2>
                                    <ul className="case-study-list" style={{ paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                        {project.details.problemSolved.map((point, idx) => (
                                            <li key={idx} className="body-text" style={{ listStyleType: 'disc', color: 'var(--text-secondary)' }}>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.section>

                                {/* User Research */}
                                {project.details.userResearch && (
                                    <motion.section variants={itemVariants} className="detail-card glass">
                                        <h2 className="outfit section-heading">User Research</h2>
                                        <ul className="case-study-list" style={{ paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                            {project.details.userResearch.map((point, idx) => (
                                                <li key={idx} className="body-text" style={{ listStyleType: 'disc', color: 'var(--text-secondary)' }}>
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.section>
                                )}

                                {/* User Pain Points */}
                                {project.details.userPainPoints && (
                                    <motion.section variants={itemVariants} className="detail-card glass">
                                        <h2 className="outfit section-heading">User Pain Points</h2>
                                        <ul className="case-study-list" style={{ paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                            {project.details.userPainPoints.map((point, idx) => (
                                                <li key={idx} className="body-text" style={{ listStyleType: 'disc', color: 'var(--text-secondary)' }}>
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.section>
                                )}

                                {/* Personas */}
                                {project.details.personas && (
                                    <motion.section variants={itemVariants} className="detail-card glass">
                                        <h2 className="outfit section-heading">Personas</h2>
                                        <ul className="case-study-list" style={{ paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                            {project.details.personas.map((point, idx) => (
                                                <li key={idx} className="body-text" style={{ listStyleType: 'disc', color: 'var(--text-secondary)' }}>
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.section>
                                )}

                                {/* User Flows */}
                                {project.details.userFlows && (
                                    <motion.section variants={itemVariants} className="detail-card glass">
                                        <h2 className="outfit section-heading">User Flows</h2>
                                        <ul className="case-study-list" style={{ paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                            {project.details.userFlows.map((point, idx) => (
                                                <li key={idx} className="body-text" style={{ listStyleType: 'disc', color: 'var(--text-secondary)' }}>
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.section>
                                )}

                                {/* Wireframes */}
                                {project.details.wireframes && (
                                    <motion.section variants={itemVariants} className="detail-card glass">
                                        <h2 className="outfit section-heading">Wireframes</h2>
                                        <ul className="case-study-list" style={{ paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                            {project.details.wireframes.map((point, idx) => (
                                                <li key={idx} className="body-text" style={{ listStyleType: 'disc', color: 'var(--text-secondary)' }}>
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.section>
                                )}

                                {/* Design Decisions */}
                                <motion.section variants={itemVariants} className="detail-card glass">
                                    <h2 className="outfit section-heading">Design Decisions</h2>
                                    <ul className="case-study-list" style={{ paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                        {project.details.designProcess.map((point, idx) => (
                                            <li key={idx} className="body-text" style={{ listStyleType: 'disc', color: 'var(--text-secondary)' }}>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.section>

                                {/* Accessibility Considerations */}
                                {project.details.accessibilityConsiderations && (
                                    <motion.section variants={itemVariants} className="detail-card glass">
                                        <h2 className="outfit section-heading">Accessibility Considerations</h2>
                                        <ul className="case-study-list" style={{ paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                            {project.details.accessibilityConsiderations.map((point, idx) => (
                                                <li key={idx} className="body-text" style={{ listStyleType: 'disc', color: 'var(--text-secondary)' }}>
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.section>
                                )}
                            </>
                        ) : (
                            <>
                                {/* Problem Solved */}
                                <motion.section variants={itemVariants} className="detail-card glass">
                                    <h2 className="outfit section-heading">Problem Solved</h2>
                                    <ul className="case-study-list" style={{ paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                        {project.details.problemSolved.map((point, idx) => (
                                            <li key={idx} className="body-text" style={{ listStyleType: 'disc', color: 'var(--text-secondary)' }}>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.section>

                                {/* Design Process */}
                                <motion.section variants={itemVariants} className="detail-card glass">
                                    <h2 className="outfit section-heading">Design Process</h2>
                                    <ul className="case-study-list" style={{ paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                        {project.details.designProcess.map((point, idx) => (
                                            <li key={idx} className="body-text" style={{ listStyleType: 'disc', color: 'var(--text-secondary)' }}>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.section>

                                {/* Technical Challenges */}
                                <motion.section variants={itemVariants} className="detail-card glass">
                                    <h2 className="outfit section-heading">Technical Challenges</h2>
                                    <ul className="case-study-list" style={{ paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                        {project.details.technicalChallenges.map((point, idx) => (
                                            <li key={idx} className="body-text" style={{ listStyleType: 'disc', color: 'var(--text-secondary)' }}>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.section>

                                {/* Solution Implemented */}
                                <motion.section variants={itemVariants} className="detail-card glass">
                                    <h2 className="outfit section-heading">Solution Implemented</h2>
                                    <ul className="case-study-list" style={{ paddingLeft: '1.25rem', margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                        {project.details.solutionImplemented.map((point, idx) => (
                                            <li key={idx} className="body-text" style={{ listStyleType: 'disc', color: 'var(--text-secondary)' }}>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                    
                                    <div style={{ marginTop: '1.5rem', borderTop: '1px solid var(--card-border)', paddingTop: '1.25rem' }}>
                                        <h4 className="outfit" style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: 700 }}>Key Implementation Features:</h4>
                                        <div className="features-list-grid">
                                            {project.details.features.map((feature, idx) => (
                                                <div key={idx} className="feature-item">
                                                    <div className="feature-icon-wrapper">
                                                        <CheckCircle2 size={18} className="feature-check-icon" />
                                                    </div>
                                                    <p className="feature-text">{feature}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.section>
                            </>
                        )}
                    </div>

                    {/* Right Column: Side Details */}
                    <div className="detail-col-side">
                        {/* My Role */}
                        <motion.section variants={itemVariants} className="detail-card side-card glass" style={{ borderLeft: '3px solid var(--accent-secondary)' }}>
                            <h3 className="outfit side-heading" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><User size={18} /> My Role</h3>
                            <p className="body-text" style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-primary)', marginTop: '0.5rem' }}>
                                {project.details.role}
                            </p>
                        </motion.section>

                        {/* Technologies Used */}
                        <motion.section variants={itemVariants} className="detail-card side-card glass">
                            <h3 className="outfit side-heading" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FileCode size={18} /> Technologies Used</h3>
                            <div className="tech-tags-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.75rem' }}>
                                {project.tech.map((t, idx) => (
                                    <span key={idx} className="tech-tag" style={{ margin: 0 }}>{t}</span>
                                ))}
                            </div>
                        </motion.section>

                        {/* Impact or Lessons Learned */}
                        <motion.section variants={itemVariants} className="detail-card side-card glass" style={{ borderLeft: '3px solid #10b981', background: 'rgba(16, 185, 129, 0.02)' }}>
                            <h3 className="outfit side-heading" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10b981' }}>
                                <TrendingUp size={18} /> {isDesignProject ? 'Lessons Learned' : 'Impact'}
                            </h3>
                            <ul className="case-study-list" style={{ paddingLeft: '1.25rem', margin: '0.5rem 0 0', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {project.details.impact.map((point, idx) => (
                                    <li key={idx} className="body-text" style={{ listStyleType: 'disc', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </motion.section>

                        {/* System Specifications / Architecture (Fallback modules support) */}
                        {project.details.architecture && (
                            <motion.section variants={itemVariants} className="detail-card side-card glass">
                                <h3 className="outfit side-heading"><Cpu size={18} /> {isDesignProject ? 'Design Specifications' : 'Architecture & Modules'}</h3>
                                <ul className="architecture-list">
                                    {project.details.architecture.map((arch, idx) => (
                                        <li key={idx}>
                                            <strong>{arch.split(':')[0]}:</strong>
                                            {arch.split(':').slice(1).join(':')}
                                        </li>
                                    ))}
                                </ul>
                            </motion.section>
                        )}
                    </div>
                </motion.div>

                {/* Figma Interactive Prototype Embed Container */}
                {isDesignProject && project.figma && (
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="detail-card glass"
                        style={{ marginBottom: '2.5rem' }}
                    >
                        <h2 className="outfit section-heading" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <FigmaIcon /> Interactive Figma Prototype
                        </h2>
                        <div style={{ position: 'relative', width: '100%', borderRadius: '1rem', overflow: 'hidden', border: '1px solid var(--card-border)', background: '#0a0a0f', height: '600px' }}>
                            <iframe
                                title={`${project.title} Figma Prototype`}
                                src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(project.figma)}`}
                                allowFullScreen
                                style={{ width: '100%', height: '100%', border: 'none' }}
                            />
                        </div>
                    </motion.section>
                )}

                {/* Screenshots Carousel */}
                {project.screenshots && project.screenshots.length > 0 && (
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 }}
                        style={{ marginTop: '2.5rem' }}
                    >
                        <ProjectCarousel 
                            images={project.screenshots} 
                            isMobile={project.id === 'nivora' || project.tech.includes('React Native') || project.tech.includes('Flutter')}
                        />
                    </motion.section>
                )}
            </main>
        </article>
    );
};

export default ProjectDetails;
