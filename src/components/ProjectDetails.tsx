import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Cpu, CheckCircle2, Award, FileCode, ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
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

const LogoDesignShowcase: React.FC = () => {
    const [selectedLogo, setSelectedLogo] = useState<any | null>(null);

    const logoShowcaseData = [
        {
            title: 'Dishvana Colombo',
            category: 'Branding & Identity',
            image: '/dishvana_logo_new.png',
            description: 'A minimalist orange dining plate emblem with crossed cutlery, tailored for a premium Sri Lankan fusion dining brand.',
            tags: ['Logo Design', 'Branding', 'Vector Art']
        },
        {
            title: 'ICT Expo 3.0',
            category: 'Event Identity',
            image: '/ict_expo_logo.jpg',
            description: 'A technological studies shield representing the Faculty of Technological Studies 2026 expo with circuit lines and CPU cores.',
            tags: ['Emblem', 'Event Identity', 'Tech Styling']
        },
        {
            title: 'Nivora Wellness',
            category: 'App Icon & Logo',
            image: '/nivora_logo_new.png',
            description: 'A 3D lavender-shaded mental well-being brain and meditating figure, creating a calming visual anchor.',
            tags: ['3D Modeling', 'Branding', 'Digital Health']
        },
        {
            title: 'YumYum Go',
            category: 'Branding & Logo',
            image: '/yumyum_go_logo.png',
            description: 'A playful and friendly food delivery branding depicting a cute pizza mascot and a high-carb delicious burger and cupcake setup.',
            tags: ['Logo Design', 'Illustration', 'Mascot']
        },
        {
            title: 'Gayansa Dress Point',
            category: 'Branding & Identity',
            image: '/gayansa_logo.png',
            description: 'A clean, minimalistic apparel store branding showcasing a stylized coat hanger accented with elegant leaves.',
            tags: ['Apparel Store', 'Minimalist', 'Branding']
        },
        {
            title: 'Praveena Fashions',
            category: 'Fashion Identity',
            image: '/praveena_fashions_logo_new.png',
            description: 'A premium gold line-art seal design featuring a minimalist woman\'s profile surrounded by elegant laurel leaves.',
            tags: ['Fashion Branding', 'Gold Foil Styling', 'Line Art Emblem']
        },
        {
            title: 'Nexora Branding',
            category: 'Identity & Concept',
            image: '/nexora_logo.png',
            description: 'A sleek, futuristic abstract blue ribbon concept with a circle core representing connectivity, styled "From Youth, For Youth".',
            tags: ['Abstract Logo', 'Corporate Identity', 'Futuristic']
        },
        {
            title: 'Wannasolo Platform',
            category: 'UI/UX & Branding',
            image: '/wannasolo_logo_new.png',
            description: 'A geographic location pin emblem accentuating solo traveler adventure paths, mountain ridges, and beachfront sunsets.',
            tags: ['Travel Logo', 'Identity Design', 'Pin Art']
        },
        {
            title: 'Mr. Smith Forge Banner (Classic)',
            category: 'Social Media Graphic',
            image: '/banner_mr_smith1.png',
            description: 'A dark, high-contrast promotional banner for Mr. Smith - The Legendary Forge Bladesmith Workshop, presenting its classic logo badge.',
            tags: ['Cover Art', 'Promo Banner', 'Workshop Branding']
        },
        {
            title: 'Mr. Smith Forge Banner (Gold Trim)',
            category: 'Social Media Graphic',
            image: '/banner_mr_smith2.jpg',
            description: 'An elegant alternative cover banner featuring gold ornate frames and a blacksmith in action, highlighting bladesmith craft.',
            tags: ['Banner Design', 'Gold Ornament', 'Marketing Ad']
        },
        {
            title: 'Mr. Smith Forge Banner (Flame Ring)',
            category: 'Social Media Graphic',
            image: '/banner_mr_smith3.jpg',
            description: 'A high-impact promotional banner representing the legendary forge heat with a glowing ring of fire logo lockup.',
            tags: ['Cover Banner', 'Creative Concept', 'Flame Motif']
        },
        {
            title: 'Tech Innovation Banner',
            category: 'LinkedIn Banner',
            image: '/banner_tech_praveena.jpg',
            description: 'A tech-inspired professional LinkedIn cover banner highlighting software engineering, AI, and UI/UX design capabilities.',
            tags: ['LinkedIn Cover', 'Tech Styling', 'Professional Brand']
        },
        {
            title: 'Dishvana Colombo Yum Paradise Banner',
            category: 'Social Media Graphic',
            image: '/banner_dishvana.png',
            description: 'A marketing advertisement banner designed for Facebook/Instagram showcasing gourmet pizza, highlighting the "One Click into Yum Paradise" tagline.',
            tags: ['Food Ad Creative', 'Facebook Cover', 'Marketing Campaign']
        }
    ];

    return (
        <div className="logo-showcase-container glass" style={{ padding: '2.5rem', borderRadius: '1.5rem', marginBottom: '2.5rem' }}>
            <h2 className="outfit section-heading" style={{ marginBottom: '1.5rem' }}>Brand Identities Catalog</h2>
            <div className="gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem' }}>
                {logoShowcaseData.map((logo, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -5 }}
                        className="gallery-card glass"
                        style={{ 
                            borderRadius: '0.75rem', 
                            overflow: 'hidden', 
                            cursor: 'pointer',
                            border: '1px solid var(--card-border)',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                        onClick={() => setSelectedLogo(logo)}
                    >
                        <div className="gallery-img-wrapper" style={{ position: 'relative', overflow: 'hidden', aspectRatio: '1/1', background: '#0a0a0f', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid var(--card-border)' }}>
                            <img 
                                src={logo.image} 
                                alt={logo.title} 
                                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                                className="gallery-img"
                            />
                            <div className="gallery-overlay" style={{ position: 'absolute', inset: 0, background: 'rgba(5, 5, 10, 0.6)', opacity: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'opacity 0.3s ease', backdropFilter: 'blur(3px)' }}>
                                <div style={{ background: 'var(--accent-primary)', color: 'white', padding: '0.5rem', borderRadius: '50%' }}>
                                    <Maximize2 size={16} />
                                </div>
                            </div>
                        </div>
                        <div style={{ padding: '1rem' }}>
                            <span style={{ fontSize: '0.7rem', color: 'var(--accent-primary)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                {logo.category}
                            </span>
                            <h4 className="outfit" style={{ fontSize: '1.05rem', margin: '0.2rem 0 0', color: 'var(--text-primary)' }}>
                                {logo.title}
                            </h4>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedLogo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedLogo(null)}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            background: 'rgba(5, 5, 10, 0.85)',
                            backdropFilter: 'blur(10px)',
                            WebkitBackdropFilter: 'blur(10px)',
                            zIndex: 9999,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '1.5rem'
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            onClick={(e) => e.stopPropagation()}
                            className="glass"
                            style={{
                                width: '100%',
                                maxWidth: '750px',
                                borderRadius: '1.5rem',
                                overflow: 'hidden',
                                border: '1px solid var(--card-border)',
                                boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
                                background: 'rgba(10,10,15,0.95)'
                            }}
                        >
                            <div className="lightbox-grid">
                                <div className="lightbox-img-container" style={{ background: '#0a0a0f', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '350px', padding: '1rem' }}>
                                    <img 
                                        src={selectedLogo.image} 
                                        alt={selectedLogo.title} 
                                        style={{ width: '100%', height: '100%', objectFit: 'contain', maxHeight: '420px' }}
                                    />
                                </div>
                                <div className="lightbox-content" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
                                    <button 
                                        onClick={() => setSelectedLogo(null)}
                                        style={{
                                            position: 'absolute',
                                            top: '1.5rem',
                                            right: '1.5rem',
                                            background: 'rgba(255,255,255,0.08)',
                                            border: '1px solid rgba(255,255,255,0.15)',
                                            color: '#f8fafc',
                                            width: '36px',
                                            height: '36px',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer',
                                            zIndex: 20
                                        }}
                                        className="close-modal-btn"
                                    >
                                        <X size={18} />
                                    </button>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                        {selectedLogo.category}
                                    </span>
                                    <h3 className="outfit" style={{ fontSize: '1.8rem', margin: '0.5rem 0 1rem', color: '#f8fafc', lineHeight: 1.2 }}>
                                        {selectedLogo.title}
                                    </h3>
                                    <p style={{ color: '#cbd5e1', lineHeight: '1.6', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                                        {selectedLogo.description}
                                    </p>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                        {selectedLogo.tags.map((tag: string, i: number) => (
                                            <span key={i} style={{ fontSize: '0.75rem', padding: '0.3rem 0.75rem', borderRadius: '6px', background: 'rgba(255,255,255,0.05)', color: '#f8fafc', border: '1px solid rgba(255,255,255,0.08)' }}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ projectId, onBack }) => {
    const project = projectsData.find(p => p.id === projectId);
    const isDesignProject = project?.id === 'logo-design' || project?.id === 'wannasolo' || project?.id === 'learnify' || project?.id === 'tabler' || project?.id === 'zigzag' || project?.id === 'avenra';

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
                    {/* Left Column: Scope & Features */}
                    <div className="detail-col-main">
                        {/* Problem Statement Card */}
                        <motion.section variants={itemVariants} className="detail-card glass">
                            <h2 className="outfit section-heading">The Challenge / Problem</h2>
                            <p className="body-text">{project.details.problem}</p>
                        </motion.section>

                        {/* Solution Card */}
                        <motion.section variants={itemVariants} className="detail-card glass">
                            <h2 className="outfit section-heading">Our Proposed Solution</h2>
                            <p className="body-text">{project.details.solution}</p>
                        </motion.section>

                        {/* Features List Section */}
                        <motion.section variants={itemVariants} className="detail-card glass">
                            <h2 className="outfit section-heading">Key Features & Deliverables</h2>
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
                        </motion.section>
                    </div>

                    {/* Right Column: Specifications */}
                    <div className="detail-col-side">
                        {/* Technologies Tags Card */}
                        <motion.section variants={itemVariants} className="detail-card side-card glass">
                            <h3 className="outfit side-heading"><FileCode size={18} /> {isDesignProject ? 'Design Toolkit' : 'Technologies Stack'}</h3>
                            <div className="tech-tags-grid">
                                {project.tech.map((t, idx) => (
                                    <span key={idx} className="tech-tag">{t}</span>
                                ))}
                            </div>
                        </motion.section>

                        {/* System Architecture */}
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

                        {/* Learning Outcomes */}
                        {project.details.learningOutcomes && (
                            <motion.section variants={itemVariants} className="detail-card side-card glass">
                                <h3 className="outfit side-heading"><Award size={18} /> {isDesignProject ? 'UX Key Takeaways' : 'Engineering Takeaways'}</h3>
                                <ul className="learning-list">
                                    {project.details.learningOutcomes.map((learn, idx) => (
                                        <li key={idx}>{learn}</li>
                                    ))}
                                </ul>
                            </motion.section>
                        )}
                    </div>
                </motion.div>

                {/* Screenshots Carousel or Custom Design Catalog Grid */}
                {project.id === 'logo-design' ? (
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 }}
                        style={{ marginTop: '2.5rem' }}
                    >
                        <LogoDesignShowcase />
                    </motion.section>
                ) : (
                    project.screenshots && project.screenshots.length > 0 && (
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
                    )
                )}
            </main>
        </article>
    );
};

export default ProjectDetails;
