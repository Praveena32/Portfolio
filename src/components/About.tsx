import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, ShieldCheck, Zap, Layers } from 'lucide-react';

const About: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="section-header">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="outfit gradient-text"
                    >About Me</motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 60 }}
                        className="section-line"
                    ></motion.div>
                </div>

                <motion.div
                    className="about-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div className="about-left" variants={itemVariants}>
                        <div className="about-text">
                            <p>
                                I am an Information & Communication Technology (Honours) student at the <strong>University of Vavuniya</strong>, specializing in software engineering, modern web architectures, and intelligent systems. Fusing rigorous academic frameworks with hands-on development experience, I design and build secure, high-performance digital products that users and businesses can trust.
                            </p>
                            <p>
                                Since beginning my technical journey in 2023, my focus has been on architectural integrity, modular clean code, and zero-compromise security. Fascinated by secure, high-performance systems, I have a deep passion for the <strong>Java programming language</strong>—actively mastering advanced Java concepts, JVM mechanics, and object-oriented software engineering principles.
                            </p>
                        </div>

                        <div className="about-cards-mini">
                            <motion.div
                                whileHover={{ y: -5, borderColor: 'var(--accent-primary)' }}
                                className="about-card glass"
                                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                            >
                                <GraduationCap className="card-icon" style={{ strokeWidth: 1.5, margin: '0 auto 0.5rem' }} />
                                <h3 style={{ marginBottom: '0.75rem' }}>Academic Path</h3>
                                
                                <div style={{ marginBottom: '0.75rem', textAlign: 'center' }}>
                                    <p className="highlight" style={{ margin: 0 }}>BICT (Hons) Scholar</p>
                                    <p style={{ margin: '0.1rem 0', fontSize: '0.85rem' }}>University of Vavuniya</p>
                                    <span className="year" style={{ display: 'block', fontSize: '0.75rem', opacity: 0.7 }}>2023 - Present</span>
                                </div>
                                
                                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '0.75rem', textAlign: 'center' }}>
                                    <p className="highlight" style={{ margin: 0 }}>G.C.E. Advanced Level</p>
                                    <p style={{ margin: '0.1rem 0', fontSize: '0.85rem' }}>Taxila Central College, Horana</p>
                                    <p style={{ margin: '0.1rem 0', fontSize: '0.8rem', opacity: 0.8 }}>(Technology Stream)</p>
                                    <span className="year" style={{ display: 'block', fontSize: '0.75rem', opacity: 0.7 }}>2019 - 2021</span>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -5, borderColor: 'var(--accent-secondary)' }}
                                className="about-card glass"
                            >
                                <ShieldCheck className="card-icon" style={{ strokeWidth: 1.5, margin: '0 auto 0.75rem', color: 'var(--accent-secondary)' }} />
                                <h3>Trust & Security</h3>
                                <p className="highlight">Privacy by Design</p>
                                <p>Local storage, data security, and access isolation.</p>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -5, borderColor: 'var(--accent-primary)' }}
                                className="about-card glass"
                            >
                                <Zap className="card-icon" style={{ strokeWidth: 1.5, margin: '0 auto 0.75rem' }} />
                                <h3>Clean Engineering</h3>
                                <p className="highlight">Type-Safe & Modular</p>
                                <p>TypeScript-driven interfaces, strict testing, and scalable code.</p>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -5, borderColor: 'var(--accent-secondary)' }}
                                className="about-card glass"
                            >
                                <Layers className="card-icon" style={{ strokeWidth: 1.5, margin: '0 auto 0.75rem', color: 'var(--accent-secondary)' }} />
                                <h3>Modern Stack UX</h3>
                                <p className="highlight">Immersive & Fluid</p>
                                <p>Seamless React/React Native apps with responsive design.</p>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div className="about-right" variants={itemVariants}>
                        <div className="profile-image-wrapper neon-box">
                            <div className="corner-accent top-left"></div>
                            <div className="corner-accent top-right"></div>
                            <div className="corner-accent bottom-left"></div>
                            <div className="corner-accent bottom-right"></div>
                            <div className="holographic-overlay"></div>
                            <div className="scanline"></div>
                            <img src="/image (3).jpg" alt="Praveena" className="profile-image" />
                            <div className="image-brain-glow"></div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
