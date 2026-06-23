import React from 'react';
import { motion } from 'framer-motion';
import { Award, Leaf, Users, Calendar } from 'lucide-react';

interface AchievementItem {
    title: string;
    organization: string;
    date: string;
    type: 'certification' | 'award';
    description?: React.ReactNode;
    link?: string;
}

interface VolunteerItem {
    role: string;
    organization: string;
    date: string;
    description: React.ReactNode;
    field: string;
}

const achievementsData: AchievementItem[] = [
    {
        title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
        organization: 'Oracle',
        date: 'Oct 2025',
        type: 'certification',
        description: <>Demonstrated fundamental knowledge of <strong>Artificial Intelligence</strong>, <strong>Machine Learning</strong>, and OCI AI Services.</>
    },
    {
        title: 'Hackforce’25 – Salesforce Hackathon (Final Top 11 Participant)',
        organization: 'Yarl Salesforce Ohana',
        date: 'Sep 2025',
        type: 'award',
        description: <>Competed with developers island-wide, designing and presenting a Salesforce-based solution to solve real-world problems. Listed in <strong>Final Top 11</strong>.</>
    },
    {
        title: 'INNOVA Ideathon 2025 – 6th Place Winner',
        organization: 'IEEE Computer Society',
        date: 'Jul 2025',
        type: 'award',
        description: <>Recognized as <strong>6th Place Winner</strong> for conceptualizing and designing innovative software solutions during the national-level ideathon.</>
    },
    {
        title: 'Prompt Engineering: How to Talk to the AIs',
        organization: 'LinkedIn',
        date: 'Aug 2025',
        type: 'certification',
        description: <>Acquired advanced prompt design strategies for <strong>large language model interaction</strong> and application building.</>
    },
    {
        title: 'Canva for Work & Design Milestones',
        organization: 'Canva',
        date: 'Feb 2024 - Aug 2025',
        type: 'certification',
        description: <>Certified for design proficiency, completing <strong>over 50 custom marketing</strong> and visual layout templates.</>
    }
];

const volunteerData: VolunteerItem[] = [
    {
        role: 'Environmental Contributor',
        organization: 'Microsoft Start (Weather) Reforestation Initiative',
        date: 'Oct 2024 - Present',
        field: 'Sustainability',
        description: <>Contributed to the global reforestation project by planting a <strong>Mangrove Tree</strong> (“Heart of Nature”) in Mozambique, supporting ecosystem restoration and carbon offset programs.</>
    },
    {
        role: 'Active Member',
        organization: 'IEEE Student Branch - University of Vavuniya',
        date: 'May 2024 - Present',
        field: 'Academic & Tech',
        description: <>Collaborated on student-led academic tech programs, <strong>visual graphic guidelines</strong>, and university <strong>hackathon coordination</strong>.</>
    }
];

const Achievements: React.FC = () => {
    return (
        <section id="achievements" className="achievements-section">
            <div className="container">
                <div className="section-header">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="outfit gradient-text"
                    >
                        Achievements & Impact
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 60 }}
                        className="section-line"
                    ></motion.div>
                </div>

                <div className="achievements-grid-layout">
                    {/* Left Column: Certifications & Competitions */}
                    <div className="achievements-column">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
                            <Award style={{ color: 'var(--accent-primary)' }} size={24} />
                            <h3 className="outfit" style={{ fontSize: '1.5rem', margin: 0, color: 'var(--text-primary)' }}>
                                Awards & Credentials
                            </h3>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            {achievementsData.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ y: -4, borderColor: 'var(--accent-primary)' }}
                                    className="achievement-card glass"
                                    style={{
                                        padding: '1.5rem',
                                        borderRadius: '1rem',
                                        position: 'relative'
                                    }}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                                        <div>
                                            <span 
                                                className="outfit"
                                                style={{
                                                    fontSize: '0.65rem',
                                                    fontWeight: '700',
                                                    padding: '0.2rem 0.6rem',
                                                    borderRadius: '4px',
                                                    background: item.type === 'award' ? 'rgba(168, 85, 247, 0.15)' : 'rgba(6, 182, 212, 0.15)',
                                                    color: item.type === 'award' ? 'var(--accent-primary)' : 'var(--accent-secondary)',
                                                    letterSpacing: '0.05em',
                                                    textTransform: 'uppercase',
                                                    display: 'inline-block',
                                                    marginBottom: '0.6rem'
                                                }}
                                            >
                                                {item.type === 'award' ? 'Competition' : 'License'}
                                            </span>
                                            <h4 className="outfit" style={{ fontSize: '1.1rem', margin: '0 0 0.4rem', color: 'var(--text-primary)', lineHeight: 1.3 }}>
                                                {item.title}
                                            </h4>
                                            <p style={{ fontSize: '0.88rem', margin: '0 0 0.5rem', color: 'var(--accent-secondary)', fontWeight: '500' }}>
                                                {item.organization}
                                            </p>
                                            {item.description && (
                                                <p style={{ fontSize: '0.85rem', margin: 0, color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                                                    {item.description}
                                                </p>
                                            )}
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-secondary)', fontSize: '0.8rem', whiteSpace: 'nowrap' }}>
                                            <Calendar size={13} />
                                            <span>{item.date}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Volunteering & Community Impact */}
                    <div className="achievements-column">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
                            <Users style={{ color: 'var(--accent-secondary)' }} size={24} />
                            <h3 className="outfit" style={{ fontSize: '1.5rem', margin: 0, color: 'var(--text-primary)' }}>
                                Volunteering & Impact
                            </h3>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            {volunteerData.map((item, idx) => {
                                const isEco = item.field === 'Sustainability';
                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.15 }}
                                        whileHover={{ y: -4, borderColor: 'var(--accent-secondary)' }}
                                        className="achievement-card glass"
                                        style={{
                                            padding: '1.5rem',
                                            borderRadius: '1rem',
                                            position: 'relative'
                                        }}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                                            <div style={{ flex: 1 }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
                                                    {isEco ? <Leaf size={14} color="#22c55e" /> : <Users size={14} color="var(--accent-secondary)" />}
                                                    <span 
                                                        className="outfit"
                                                        style={{
                                                            fontSize: '0.65rem',
                                                            fontWeight: '700',
                                                            padding: '0.2rem 0.6rem',
                                                            borderRadius: '4px',
                                                            background: isEco ? 'rgba(34, 197, 94, 0.15)' : 'rgba(6, 182, 212, 0.15)',
                                                            color: isEco ? '#22c55e' : 'var(--accent-secondary)',
                                                            letterSpacing: '0.05em',
                                                            textTransform: 'uppercase'
                                                        }}
                                                    >
                                                        {item.field}
                                                    </span>
                                                </div>
                                                <h4 className="outfit" style={{ fontSize: '1.1rem', margin: '0 0 0.4rem', color: 'var(--text-primary)', lineHeight: 1.3 }}>
                                                    {item.role}
                                                </h4>
                                                <p style={{ fontSize: '0.88rem', margin: '0 0 0.5rem', color: 'var(--accent-primary)', fontWeight: '500' }}>
                                                    {item.organization}
                                                </p>
                                                <p style={{ fontSize: '0.85rem', margin: 0, color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                                                    {item.description}
                                                </p>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-secondary)', fontSize: '0.8rem', whiteSpace: 'nowrap' }}>
                                                <Calendar size={13} />
                                                <span>{item.date}</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
