import React from 'react';
import { Mail, Linkedin, Github, Facebook, Send, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

// Custom icons for Behance
const BehanceIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 13h-5c0 1.103.897 2 2 2 1.103 0 2-.897 2-2zm-2-4h-1c-1.103 0-2 .897-2 2h5c0-1.103-.897-2-2-2zM9 13H5v2h4c1.103 0 2-.897 2-2s-.897-2-2-2zm0-6H5v2h4c1.103 0 2-.897 2-2s-.897-2-2-2zM12 3H2v18h20V3H12zm2 14h-2.5l-2.5-3.5L6.5 17H4v-2h2.5L9 11.5 6.5 8H4V6h2.5l2.5 3.5L11.5 6H14v2h-2.5L9 11.5l2.5 3.5H14v2zm6-4h-5c0-2.206 1.794-4 4-4s4 1.794 4 4c0 1.053-.408 2.01-.1.1z" />
    </svg>
);

const Contact: React.FC = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-split-container">
                {/* Left side: Video Background */}
                <div className="contact-visual">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="contact-video"
                    >
                        <source src="/Video Project.mp4" type="video/mp4" />
                    </video>
                    <div className="video-overlay"></div>
                    <div className="cv-download-wrapper">
                        <motion.a
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            href="/Praveena_CV.pdf"
                            download
                            className="btn-cv-download"
                        >
                            <FileText size={20} />
                            Download CV
                        </motion.a>
                    </div>
                </div>

                {/* Right side: Content Block (Compact) */}
                <div className="contact-content-block">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                        viewport={{ once: true }}
                        className="contact-glass-card"
                    >
                        <h2 className="outfit contact-title">Let's Build Something Great</h2>
                        <p className="contact-subtitle">
                            Open to industry internships, research opportunities, collaborations
                            and projects in AI/ML, full-stack development, and UI/UX design.
                        </p>
                        <a href="mailto:mpbkalpana22@gmail.com" className="contact-email">
                            mpbkalpana22@gmail.com
                        </a>

                        <div className="social-grid">
                            <motion.a whileHover={{ y: -5 }} href="https://www.linkedin.com/in/praveenabuddhini/" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="social-link"><Linkedin size={24} /></motion.a>
                            <motion.a whileHover={{ y: -5 }} href="https://github.com/Praveena32" target="_blank" rel="noopener noreferrer" title="GitHub" className="social-link"><Github size={24} /></motion.a>
                            <motion.a whileHover={{ y: -5 }} href="mailto:mpbkalpana22@gmail.com" title="Email" className="social-link"><Mail size={24} /></motion.a>
                            <motion.a whileHover={{ y: -5 }} href="https://www.facebook.com/share/14fWjHoobdV/" title="Facebook" className="social-link" target="_blank" rel="noopener noreferrer"><Facebook size={24} /></motion.a>
                            <motion.a whileHover={{ y: -5 }} href="https://www.behance.net/praveenbk2002" title="Behance" className="social-link" target="_blank" rel="noopener noreferrer"><BehanceIcon /></motion.a>
                        </div>

                        <div className="contact-actions">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="mailto:mpbkalpana22@gmail.com"
                                className="btn-email-me"
                            >
                                <Send size={20} />
                                Email Me
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://www.linkedin.com/in/praveenabuddhini/"
                                className="btn-linkedin-connect"
                            >
                                <Linkedin size={20} />
                                Connect on LinkedIn
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
