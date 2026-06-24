import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronRight, Linkedin, Github, Mail, Briefcase, GraduationCap, Code2, Eye } from 'lucide-react';

const roles = [
    'Aspiring Software Engineer',
    'Full-Stack Developer',
    'UI/UX Designer'
];

const BehanceIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="behance-icon">
        <path d="M22 13h-5c0 1.103.897 2 2 2 1.103 0 2-.897 2-2zm-2-4h-1c-1.103 0-2 .897-2 2h5c0-1.103-.897-2-2-2zM9 13H5v2h4c1.103 0 2-.897 2-2s-.897-2-2-2zm0-6H5v2h4c1.103 0 2-.897 2-2s-.897-2-2-2zM12 3H2v18h20V3H12zm2 14h-2.5l-2.5-3.5L6.5 17H4v-2h2.5L9 11.5 6.5 8H4V6h2.5l2.5 3.5L11.5 6H14v2h-2.5L9 11.5l2.5 3.5H14v2zm6-4h-5c0-2.206 1.794-4 4-4s4 1.794 4 4c0 1.053-.408 2.01-.1.1z" />
    </svg>
);

const Hero: React.FC = () => {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(100);
    const [viewsCount, setViewsCount] = useState(1428);

    useEffect(() => {
        try {
            const stored = localStorage.getItem('portfolio_views');
            let current = 1428;
            if (stored) {
                current = parseInt(stored, 10);
                if (isNaN(current) || current < 1428) {
                    current = 1428;
                }
            }
            const nextVal = current + 1;
            localStorage.setItem('portfolio_views', nextVal.toString());
            setViewsCount(nextVal);
        } catch (e) {
            console.error('Error tracking views:', e);
        }
    }, []);

    useEffect(() => {
        let timer: any;
        const fullText = roles[currentRoleIndex];

        const handleTyping = () => {
            if (!isDeleting) {
                setCurrentText(fullText.substring(0, currentText.length + 1));
                setTypingSpeed(90);

                if (currentText === fullText) {
                    timer = setTimeout(() => setIsDeleting(true), 2000);
                    return;
                }
            } else {
                setCurrentText(fullText.substring(0, currentText.length - 1));
                setTypingSpeed(45);

                if (currentText === '') {
                    setIsDeleting(false);
                    setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
                    return;
                }
            }

            timer = setTimeout(handleTyping, typingSpeed);
        };

        timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

    return (
        <section id="home" className="hero-section">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="hero-video"
            >
                <source src="/grok-video-b54e7476-241e-48f9-a853-3f8ab578594f.mp4" type="video/mp4" />
            </video>
            <div className="hero-overlay"></div>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-content"
                >
                    <p className="hero-welcome gradient-text outfit">
                        Hi, I'm Praveena Buddhini
                    </p>
                    <h1 className="outfit">
                        Crafting Intelligent <br />
                        <span className="gradient-text">Digital Experiences</span>
                    </h1>
                    <p className="hero-subtitle outfit" style={{ minHeight: '2.5rem' }}>
                        {currentText}
                        <span className="typing-cursor">|</span>
                    </p>
                    <p className="hero-education">
                        Bachelors in ICT Honors — University of Vavuniya
                    </p>
                    <div className="hero-status-row">
                        <div className="hero-availability-badge glass outfit" id="hero-availability-status">
                            <span className="availability-pulse-dot"></span>
                            <span>Open to industry internships and research collaborations</span>
                        </div>
                        <div className="hero-views-badge glass outfit" id="hero-views-counter">
                            <Eye size={16} />
                            <span>{viewsCount.toLocaleString()} Views</span>
                        </div>
                    </div>

                    {/* Highly Scannable Highlights Badges Grid */}
                    <div className="hero-badges-grid">
                        <div className="hero-badge glass">
                            <GraduationCap size={16} className="hero-badge-icon icon-cyan" />
                            <span className="outfit">ICT Honors Student</span>
                        </div>
                        <div className="hero-badge glass">
                            <Briefcase size={16} className="hero-badge-icon icon-purple" />
                            <span className="outfit">Ex-Bank Trainee</span>
                        </div>
                        <div className="hero-badge glass">
                            <Code2 size={16} className="hero-badge-icon icon-emerald" />
                            <span className="outfit">Full-Stack & UI/UX Stack</span>
                        </div>
                    </div>

                    {/* Above the Fold CTAs */}
                    <div className="cta-buttons">
                        <a id="hero-download-cv-btn" href="/Praveena_CV.pdf" download className="btn-primary">
                            <Download size={18} />
                            <span>Download CV</span>
                        </a>
                        <a id="hero-view-projects-btn" href="#projects" className="btn-secondary">
                            <span>View Projects</span>
                            <ChevronRight size={18} />
                        </a>
                    </div>

                    {/* Above the Fold Quick Connect Social Icons Row */}
                    <div className="hero-social-row">
                        <motion.a 
                            id="hero-social-linkedin-link"
                            whileHover={{ y: -3, scale: 1.05 }} 
                            href="https://www.linkedin.com/in/praveenabuddhini/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hero-social-icon linkedin" 
                            title="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </motion.a>
                        <motion.a 
                            id="hero-social-github-link"
                            whileHover={{ y: -3, scale: 1.05 }} 
                            href="https://github.com/Praveena32" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hero-social-icon github" 
                            title="GitHub"
                        >
                            <Github size={20} />
                        </motion.a>
                        <motion.a 
                            id="hero-social-email-link"
                            whileHover={{ y: -3, scale: 1.05 }} 
                            href="mailto:mpbkalpana22@gmail.com" 
                            className="hero-social-icon email" 
                            title="Email"
                        >
                            <Mail size={20} />
                        </motion.a>
                        <motion.a 
                            id="hero-social-behance-link"
                            whileHover={{ y: -3, scale: 1.05 }} 
                            href="https://www.behance.net/praveenbk2002" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hero-social-icon behance" 
                            title="Behance"
                        >
                            <BehanceIcon />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
