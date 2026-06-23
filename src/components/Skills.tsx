import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, Wrench } from 'lucide-react';

interface TechItem {
    name: string;
    iconUrl: string;
    level: number;
    isInvert?: boolean;
}

interface SkillCategory {
    id: string;
    title: string;
    icon: React.ReactNode;
    color: string;
    glow: string;
    description: string;
    techs: TechItem[];
}

const skillsCategories: SkillCategory[] = [
    {
        id: 'frontend',
        title: 'Frontend',
        icon: <Layout size={22} />,
        color: '#06b6d4', // cyan
        glow: 'rgba(6, 182, 212, 0.15)',
        description: 'Crafting highly responsive, interactive, and modern user interfaces.',
        techs: [
            { name: 'HTML', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', level: 95 },
            { name: 'CSS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', level: 90 },
            { name: 'JavaScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 90 },
            { name: 'React', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 85 },
            { name: 'Next.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', isInvert: true, level: 80 }
        ]
    },
    {
        id: 'backend',
        title: 'Backend',
        icon: <Server size={22} />,
        color: '#a855f7', // purple
        glow: 'rgba(168, 85, 247, 0.15)',
        description: 'Building secure server-side logic, routing architectures, and API services.',
        techs: [
            { name: 'Node.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', level: 80 },
            { name: 'Express.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', isInvert: true, level: 80 },
            { name: 'PHP', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', level: 80 },
            { name: 'Laravel', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg', level: 75 },
            { name: '.NET', iconUrl: 'https://www.vectorlogo.zone/logos/dotnet/dotnet-icon.svg', level: 75 },
            { name: 'Java', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', level: 80 },
            { name: 'C#', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', level: 75 },
            { name: 'C++', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', level: 75 },
            { name: 'C', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', level: 75 }
        ]
    },
    {
        id: 'database',
        title: 'Database',
        icon: <Database size={22} />,
        color: '#10b981', // emerald
        glow: 'rgba(16, 185, 129, 0.15)',
        description: 'Managing structured schemas, database inquiries, and indexing optimization.',
        techs: [
            { name: 'MySQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', level: 85 },
            { name: 'MongoDB', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', level: 80 },
            { name: 'MariaDB', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg', level: 80 }
        ]
    },
    {
        id: 'tools',
        title: 'Tools',
        icon: <Wrench size={22} />,
        color: '#eab308', // gold
        glow: 'rgba(234, 179, 8, 0.15)',
        description: 'Managing version control, cloud deployment operations, and testing pipelines.',
        techs: [
            { name: 'Git', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', level: 90 },
            { name: 'GitHub', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', isInvert: true, level: 90 },
            { name: 'Vercel', iconUrl: 'https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg', level: 85 },
            { name: 'Postman', iconUrl: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg', level: 85 },
            { name: 'NetBeans', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netbeans/netbeans-original.svg', level: 80 },
            { name: 'Figma', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', level: 85 },
            { name: 'Adobe XD', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-original.svg', level: 80 },
            { name: 'AutoCAD', iconUrl: 'https://cdn.simpleicons.org/autocad/EC232B', level: 75 },
            { name: 'Tally Prime', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Tally_-_Logo.png', isInvert: true, level: 80 }
        ]
    }
];

const Skills: React.FC = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <div className="section-header" style={{ marginBottom: '3.5rem' }}>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="outfit gradient-text"
                        style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}
                    >
                        Technical Expertise
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 60 }}
                        className="section-line"
                    ></motion.div>
                </div>

                <div 
                    className="skills-expertise-grid" 
                    style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                        gap: '2rem' 
                    }}
                >
                    {skillsCategories.map((cat, idx) => (
                        <motion.div
                            key={cat.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            whileHover={{ y: -6, borderColor: cat.color, boxShadow: `0 12px 30px ${cat.glow}` }}
                            className="skills-card glass"
                            style={{
                                padding: '2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                border: '1px solid var(--card-border)',
                                borderRadius: '1.5rem',
                                background: 'rgba(255, 255, 255, 0.02)',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}
                        >
                            {/* Card Header */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
                                <div style={{ 
                                    background: 'rgba(128, 128, 128, 0.06)', 
                                    color: cat.color, 
                                    padding: '0.6rem', 
                                    borderRadius: '0.75rem', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    border: '1px solid rgba(255, 255, 255, 0.05)',
                                    boxShadow: `0 0 10px ${cat.glow}`
                                }}>
                                    {cat.icon}
                                </div>
                                <h3 className="outfit" style={{ fontSize: '1.3rem', margin: 0, color: 'var(--text-primary)', fontWeight: '700' }}>
                                    {cat.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: '0 0 1.5rem', minHeight: '40px' }}>
                                {cat.description}
                            </p>

                            {/* Skills progress list */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginTop: '1.5rem' }}>
                                {cat.techs.map((tech, i) => (
                                    <div key={i} className="skill-progress-item">
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <img 
                                                    src={tech.iconUrl} 
                                                    alt={tech.name} 
                                                    className={tech.isInvert ? 'dark-invert' : ''} 
                                                    style={{ width: '16px', height: '16px', objectFit: 'contain' }}
                                                />
                                                <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-primary)' }}>{tech.name}</span>
                                            </div>
                                            <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-secondary)', opacity: 0.8 }}>{tech.level}%</span>
                                        </div>
                                        {/* Modern indicator progress bar */}
                                        <div style={{ 
                                            width: '100%', 
                                            height: '6px', 
                                            background: 'rgba(128, 128, 128, 0.08)', 
                                            borderRadius: '50px', 
                                            overflow: 'hidden',
                                            border: '1px solid rgba(255, 255, 255, 0.03)'
                                        }}>
                                            <motion.div 
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${tech.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                                style={{ 
                                                    height: '100%', 
                                                    background: `linear-gradient(90deg, ${cat.color}, var(--accent-secondary))`, 
                                                    borderRadius: '50px',
                                                    boxShadow: `0 0 8px ${cat.color}`
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
