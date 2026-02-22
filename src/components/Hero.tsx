import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <section id="home" className="hero-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-content"
                >
                    <h1 className="outfit">
                        Crafting Digital <br />
                        <span className="gradient-text">Experiences</span>
                    </h1>
                    <p className="hero-subtitle">
                        I am a third-year ICT Honors student at the University of Vavuniya,
                        passionate about building modern, industrial-grade tech solutions.
                    </p>
                    <div className="cta-buttons">
                        <a href="#projects" className="btn-primary">View Projects</a>
                        <a href="#contact" className="btn-secondary">Let's Talk</a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
