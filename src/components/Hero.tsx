import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const roles = [
    'Aspiring Software Engineer',
    'Full-Stack Developer',
    'UI/UX Designer'
];

const Hero: React.FC = () => {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(100);

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
                    <p className="hero-availability">
                        Open to industry internships and research collaborations
                    </p>
                    <div className="cta-buttons">
                        <a href="#projects" className="btn-primary">View Projects</a>
                        <a href="#contact" className="btn-secondary">Let's Connect</a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
