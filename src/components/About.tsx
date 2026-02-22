import React from 'react';
import { motion } from 'framer-motion';

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
                    <motion.div className="about-text" variants={itemVariants}>
                        <p>
                            I am a dedicated ICT Honors student at the <strong>University of Vavuniya</strong>,
                            Sri Lanka. My journey in technology began in 2023, and I have since
                            immersed myself in the world of software development and information systems.
                        </p>
                        <p>
                            Currently in my third year, I am focused on bridging the gap between
                            academic excellence and industrial requirements. My goal is to create
                            solutions that are not only technically sound but also user-centric
                            and business-aligned.
                        </p>
                    </motion.div>

                    <div className="about-cards">
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ y: -5, borderColor: 'var(--accent-primary)' }}
                            className="about-card glass"
                        >
                            <h3>Education</h3>
                            <p>Bachelors in ICT Honors</p>
                            <p className="highlight">University of Vavuniya</p>
                            <span className="year">2023 - Present</span>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            whileHover={{ y: -5, borderColor: 'var(--accent-secondary)' }}
                            className="about-card glass"
                        >
                            <h3>Approach</h3>
                            <p>Modern Design</p>
                            <p>Scalable Code</p>
                            <p>User Centric</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
