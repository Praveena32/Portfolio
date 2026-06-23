import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar, CheckCircle2, Users, FileText, Compass, Server, Shield } from 'lucide-react';

const Experience: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as any } }
    };

    const highlights = [
        <>Managed daily cash management operations, savings/current account queries, and digital banking support for <strong>100+ customers daily</strong>, maintaining high customer service scores.</>,
        <>Executed end-to-end processing and validation of <strong>KYC documentation</strong>, customer logs, and account openings under strict corporate security and compliance benchmarks.</>,
        <>Collaborated with a cross-functional branch team during high-traffic peak hours, dynamically auditing ledger logs and resolving <strong>ledger discrepancies</strong> to ensure zero documentation errors.</>,
        <>Actively identified operational bottlenecks in traditional queue routing, suggesting localized workflow adjustments that improved customer servicing speeds by <strong>15%</strong>.</>
    ];

    const transferableSkills = [
        {
            title: 'User Empathy & UX Research',
            description: <>Assisting diverse demographics with financial tools developed deep active-listening skills. Translating user pain points into seamless workflows matches <strong>user persona mapping</strong> and <strong>empathetic design</strong>.</>,
            icon: <Compass size={20} className="skill-icon-transfer" />
        },
        {
            title: 'Data Integrity & Validation',
            description: <>Auditing high-volume transaction entries with <strong>zero-error tolerance</strong> instilled a rigorous practice of detail validation, mapping to secure schemas, database design, and defensive coding.</>,
            icon: <Shield size={20} className="skill-icon-transfer" />
        },
        {
            title: 'System Workflows & Logic',
            description: <>Operating under banking compliance pipelines and state-owned ledger frameworks directly matches the principles of <strong>systems architecture</strong>, operational business logic, and backend state machines.</>,
            icon: <Server size={20} className="skill-icon-transfer" />
        },
        {
            title: 'Collaborative Problem-Solving',
            description: <>Coordinating with managers and operations heads to audit documents and streamline inquiries mirrors <strong>agile teamwork</strong>, peer code review processes, and cross-functional engineering.</>,
            icon: <Users size={20} className="skill-icon-transfer" />
        }
    ];

    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <div className="section-header" style={{ marginBottom: '3.5rem' }}>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="outfit gradient-text"
                        style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}
                    >
                        Professional Experience
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 60 }}
                        className="section-line"
                    ></motion.div>
                </div>

                <motion.div
                    className="experience-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1.2fr 1fr',
                        gap: '2.5rem',
                        alignItems: 'start'
                    }}
                >
                    {/* Role Details Card */}
                    <motion.div className="experience-card-main glass" variants={cardVariants} whileHover={{ y: -5 }}>
                        <div className="experience-badge-container">
                            <span className="experience-role-tag outfit">Bank Trainee</span>
                            <span className="experience-duration-tag outfit">
                                <Calendar size={13} style={{ marginRight: '0.3rem' }} />
                                Sept 2023 - Aug 2024
                            </span>
                        </div>

                        <div className="experience-header-block" style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                            <div className="company-logo-stub" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <Building2 size={24} className="accent-glow-icon" style={{ color: 'var(--accent-primary)' }} />
                                <div>
                                    <h3 className="outfit" style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                                        People's Bank
                                    </h3>
                                    <p className="outfit" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '0.1rem 0 0' }}>
                                        National Commercial Bank — Sri Lanka
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="experience-highlights">
                            <h4 className="outfit" style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <FileText size={16} color="var(--accent-secondary)" />
                                Key Responsibilities & Achievements
                            </h4>
                            <ul style={{ paddingLeft: 0, listStyle: 'none', margin: 0 }}>
                                {highlights.map((item, index) => (
                                    <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1.2rem', fontSize: '0.92rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                                        <CheckCircle2 size={16} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '0.2rem' }} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Transferable Skills Mapping Card */}
                    <motion.div className="experience-skills-mapping" variants={cardVariants}>
                        <div className="skills-mapping-header" style={{ marginBottom: '1.5rem' }}>
                            <h3 className="outfit" style={{ fontSize: '1.4rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                                Transferable Engineering & UX Skills
                            </h3>
                            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: '0.35rem 0 0', lineHeight: 1.5 }}>
                                How professional banking tenure translates directly into high-quality software development and empathetic interface design.
                            </p>
                        </div>

                        <div className="transferable-skills-list" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            {transferableSkills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    className="transferable-skill-item glass"
                                    whileHover={{ x: 5, borderColor: 'var(--accent-secondary)' }}
                                    style={{
                                        padding: '1.25rem',
                                        borderRadius: '0.75rem',
                                        border: '1px solid var(--card-border)',
                                        background: 'rgba(255, 255, 255, 0.01)',
                                        transition: 'all 0.3s ease',
                                        display: 'flex',
                                        gap: '1rem',
                                        alignItems: 'flex-start'
                                    }}
                                >
                                    <div className="transfer-icon-container" style={{
                                        background: 'rgba(6, 182, 212, 0.08)',
                                        border: '1px solid rgba(6, 182, 212, 0.2)',
                                        color: 'var(--accent-secondary)',
                                        padding: '0.5rem',
                                        borderRadius: '8px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0
                                    }}>
                                        {skill.icon}
                                    </div>
                                    <div>
                                        <h4 className="outfit" style={{ fontSize: '1rem', fontWeight: 600, margin: '0 0 0.4rem 0', color: 'var(--text-primary)' }}>
                                            {skill.title}
                                        </h4>
                                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                                            {skill.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
