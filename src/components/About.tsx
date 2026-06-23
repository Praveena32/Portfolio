import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, ShieldCheck, Zap, Layers } from 'lucide-react';

const About: React.FC = () => {

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

                {/* Intro row: Description left, Photo right */}
                <motion.div
                    className="about-intro-row"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="about-text">
                        <p>
                            I am a <strong>Bachelor of Information and Communication Technology (Honours)</strong> undergraduate at the <strong>University of Vavuniya</strong>, operating at the intersection of Software Engineering, Full-Stack Development, and Human-Centered UI/UX Design. My core approach centers on human-centered problem solving—bridging the gap between robust, high-performance backends and intuitive, accessible user interfaces to build digital experiences that deliver real, measurable impact.
                        </p>
                        <p>
                            Rather than just writing code, I focus on system workflows, data validation, and clean interface ergonomics. My professional tenure as a commercial bank trainee, combined with national-level hackathon and ideathon recognitions, has developed my collaborative agility, initiative, and growth mindset. I am highly adaptable, eager to solve complex structural problems, and continuously seeking to expand my technical depth to create secure, type-safe, and user-centric systems.
                        </p>
                    </div>
                    <div className="about-intro-photo">
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
                    </div>
                </motion.div>

                {/* Cards grid below */}
                <div
                    className="about-cards-mini"
                    style={{ marginTop: '2.5rem' }}
                >
                    {/* Academic & Education Card - spans 2 columns */}
                    <motion.div
                        whileHover={{ y: -5, borderColor: 'var(--accent-primary)' }}
                        className="about-card glass academic-card-expanded"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ 
                            gridColumn: 'span 2', 
                            display: 'flex', 
                            flexDirection: 'column', 
                            alignItems: 'stretch',
                            textAlign: 'left'
                        }}
                    >
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.25rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '1rem' }}>
                            <GraduationCap className="card-icon" style={{ strokeWidth: 1.5, margin: 0, flexShrink: 0 }} />
                            <div>
                                <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>Education</h3>
                                <p style={{ margin: '0.15rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Bachelor of Information and Communication Technology (BICT)</p>
                                <p style={{ margin: '0.1rem 0 0', fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-secondary)' }}>University of Vavuniya <span style={{ opacity: 0.6, fontWeight: 400, marginLeft: '0.5rem' }}>| 2023 - Present</span></p>
                            </div>
                        </div>
                        
                        <div>
                            <h4 className="outfit" style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                                Relevant Coursework:
                            </h4>
                            <div className="coursework-grid">
                                {[
                                    'Software Engineering',
                                    'Human Computer Interaction',
                                    'Database Systems',
                                    'Web Development',
                                    'Mobile Computing',
                                    'Distributed Systems'
                                ].map((course, idx) => (
                                    <div key={idx} className="coursework-item">
                                        <span className="coursework-dot"></span>
                                        <span>{course}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Human-Centered UX Card */}
                    <motion.div
                        whileHover={{ y: -5, borderColor: 'var(--accent-secondary)' }}
                        className="about-card glass"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Layers className="card-icon" style={{ strokeWidth: 1.5, margin: '0 auto 0.75rem', color: 'var(--accent-secondary)' }} />
                        <h3>Human-Centered UX</h3>
                        <p className="highlight">Ergonomics & Research</p>
                        <p>Synthesizing personas, wireframes, and interface guidelines into accessible, high-fidelity user journeys.</p>
                    </motion.div>

                    {/* Full-Stack Dev Card */}
                    <motion.div
                        whileHover={{ y: -5, borderColor: 'var(--accent-primary)' }}
                        className="about-card glass"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Zap className="card-icon" style={{ strokeWidth: 1.5, margin: '0 auto 0.75rem' }} />
                        <h3>Full-Stack Dev</h3>
                        <p className="highlight">Modern App Stack</p>
                        <p>Fusing React, Next.js, and Node architectures with secure relational and NoSQL databases.</p>
                    </motion.div>

                    {/* Software Engineering Card - spans 2 columns */}
                    <motion.div
                        whileHover={{ y: -5, borderColor: 'var(--accent-secondary)' }}
                        className="about-card glass software-card-expanded"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ 
                            gridColumn: 'span 2',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'stretch',
                            textAlign: 'left'
                        }}
                    >
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '0.75rem' }}>
                            <ShieldCheck className="card-icon" style={{ strokeWidth: 1.5, margin: 0, flexShrink: 0, color: 'var(--accent-secondary)' }} />
                            <div>
                                <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>Software Engineering</h3>
                                <p className="highlight" style={{ margin: '0.15rem 0 0', fontSize: '0.85rem' }}>System Integrity & Clean Architectures</p>
                            </div>
                        </div>
                        <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.5', color: 'var(--text-secondary)' }}>
                            Designing modular and testable backend systems, maintaining structured validation checks, auditing logic pipelines, and enforcing type-safe development standards.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
