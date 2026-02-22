import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
    { name: 'Java & OOP', level: 90 },
    { name: 'Python', level: 85 },
    { name: 'C / C++ / C#', level: 80 },
    { name: 'MySQL & Databases', level: 85 },
    { name: 'PHP & Web Backend', level: 75 },
    { name: 'React & TypeScript', level: 90 },
    { name: 'Figma (UI/UX)', level: 85 },
    { name: 'HTML/CSS', level: 95 },
];

const Skills: React.FC = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <div className="section-header">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="outfit gradient-text"
                    >Technical Expertise</motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 60 }}
                        className="section-line"
                    ></motion.div>
                </div>

                <div className="skills-grid">
                    {skillsData.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="skill-item"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            viewport={{ once: true }}
                        >
                            <div className="skill-info">
                                <span className="skill-name">{skill.name}</span>
                                <span className="skill-percentage">{skill.level}%</span>
                            </div>
                            <div className="skill-bar-bg">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="skill-bar-fill"
                                ></motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
