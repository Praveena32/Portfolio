import React from 'react';
import { motion } from 'framer-motion';
import { 
    Layout, Server, Palette, Cpu, CheckCircle2
} from 'lucide-react';

interface TechItem {
    name: string;
    iconUrl: string;
    isInvert?: boolean;
}

interface SkillCategory {
    id: string;
    title: string;
    icon: React.ReactNode;
    color: string;
    glow: string;
    techs: TechItem[];
    description: string;
    competencies: string[];
}

const skillsCategories: SkillCategory[] = [
    {
        id: 'frontend',
        title: 'Frontend & Mobile Dev',
        icon: <Layout size={24} />,
        color: '#06b6d4', // cyan
        glow: 'rgba(6, 182, 212, 0.15)',
        description: 'Building clean, cross-platform mobile apps and highly responsive, interactive web portals.',
        techs: [
            { name: 'React Native', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'React.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'TypeScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
            { name: 'Next.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', isInvert: true },
            { name: 'Tailwind CSS', iconUrl: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' }
        ],
        competencies: [
            'Expo Router & File-based mobile routing',
            'Fluid animations using React Native Reanimated',
            'Tailored responsive layouts & CSS transitions'
        ]
    },
    {
        id: 'backend',
        title: 'Backend & System Design',
        icon: <Server size={24} />,
        color: '#a855f7', // purple
        glow: 'rgba(168, 85, 247, 0.15)',
        description: 'Building secure, multi-paradigm backend architectures, object-oriented systems, and scalable API layers.',
        techs: [
            { name: 'Java', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
            { name: 'Spring Boot', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
            { name: '.NET', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
            { name: 'Django', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', isInvert: true },
            { name: 'Laravel', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
            { name: 'Node.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' }
        ],
        competencies: [
            'Advanced Object-Oriented Programming (OOP) concepts & design patterns',
            'Robust enterprise architecture with Spring Boot, .NET, Django, and Laravel',
            'Relational database engineering (MySQL) & NoSQL systems'
        ]
    },
    {
        id: 'design',
        title: 'UI/UX & Creative Design',
        icon: <Palette size={24} />,
        color: '#ec4899', // pink
        glow: 'rgba(236, 72, 153, 0.15)',
        description: 'Creating high-fidelity vector mockups, interactive prototypes, and custom vector brand assets.',
        techs: [
            { name: 'Figma', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
            { name: 'Illustrator', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg' },
            { name: 'Photoshop', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg' }
        ],
        competencies: [
            'User journey mapping & high-fidelity interactive flows',
            'Vector logos, brand characters & cover banners',
            'Typography hierarchies & consistent HSL schemes'
        ]
    },
    {
        id: 'ai',
        title: 'AI & Data Engineering',
        icon: <Cpu size={24} />,
        color: '#eab308', // gold/yellow
        glow: 'rgba(234, 179, 8, 0.15)',
        description: 'Leveraging AI prompt design, Python scripting, and machine learning models.',
        techs: [
            { name: 'Python', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
            { name: 'OpenAI API', iconUrl: 'https://www.vectorlogo.zone/logos/openai/openai-icon.svg' },
            { name: 'PyTorch', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' }
        ],
        competencies: [
            'Advanced prompt engineering for large language models',
            'Scripting custom file scrapers & automation scripts',
            'Basic ML classifier implementation & dataset mapping'
        ]
    }
];

const secondaryTools = [
    { name: 'Git', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', isInvert: true },
    { name: 'npm', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' },
    { name: 'Vite', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg' },
    { name: 'PHP', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'Postman', iconUrl: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
    { name: 'Jest', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' },
    { name: 'Cypress', iconUrl: 'https://www.vectorlogo.zone/logos/cypressio/cypressio-icon.svg' }
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
                    >
                        Technical Expertise
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 60 }}
                        className="section-line"
                    ></motion.div>
                </div>

                {/* 4 Core Expertise Cards Grid */}
                <div className="skills-expertise-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                    {skillsCategories.map((cat, idx) => (
                        <motion.div
                            key={cat.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
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
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                minHeight: '380px'
                            }}
                        >
                            {/* Card Header */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                                <div style={{ background: `rgba(128, 128, 128, 0.08)`, color: cat.color, padding: '0.75rem', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    {cat.icon}
                                </div>
                                <h3 className="outfit" style={{ fontSize: '1.35rem', margin: 0, color: 'var(--text-primary)', fontWeight: '700' }}>
                                    {cat.title}
                                </h3>
                            </div>

                            {/* Short Description */}
                            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
                                {cat.description}
                            </p>

                            {/* Technologies Icons Horizontal Wrap */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.75rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '1.25rem' }}>
                                {cat.techs.map((tech, i) => (
                                    <div 
                                        key={i} 
                                        style={{ 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            gap: '0.4rem', 
                                            background: 'rgba(128, 128, 128, 0.04)', 
                                            border: '1px solid var(--card-border)',
                                            padding: '0.35rem 0.75rem', 
                                            borderRadius: '50px',
                                            fontSize: '0.75rem',
                                            fontWeight: '600',
                                            color: 'var(--text-primary)'
                                        }}
                                        className="skill-tag-item"
                                    >
                                        <img 
                                            src={tech.iconUrl} 
                                            alt={tech.name} 
                                            className={tech.isInvert ? 'dark-invert' : ''} 
                                            style={{ width: '16px', height: '16px', objectFit: 'contain' }}
                                        />
                                        <span>{tech.name}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Core Competencies Bullets */}
                            <div style={{ marginTop: 'auto' }}>
                                <h4 className="outfit" style={{ fontSize: '0.85rem', color: cat.color, textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '700', marginBottom: '0.75rem' }}>
                                    Core Competencies
                                </h4>
                                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', padding: 0, margin: 0 }}>
                                    {cat.competencies.map((comp, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.3 }}>
                                            <CheckCircle2 size={13} style={{ color: cat.color, marginTop: '0.15rem', flexShrink: 0 }} />
                                            <span>{comp}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Secondary Familiar Tools Tag Cloud */}
                <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                    <h3 className="outfit" style={{ fontSize: '1rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem', fontWeight: '600' }}>
                        Familiar Tools & Technologies
                    </h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', maxWidth: '850px', margin: '0 auto' }}>
                        {secondaryTools.map((tool, i) => (
                            <div 
                                key={i} 
                                style={{ 
                                    display: 'inline-flex', 
                                    alignItems: 'center', 
                                    gap: '0.5rem', 
                                    background: 'rgba(128, 128, 128, 0.02)', 
                                    border: '1px solid var(--card-border)', 
                                    padding: '0.4rem 1rem', 
                                    borderRadius: '50px',
                                    fontSize: '0.8rem',
                                    fontWeight: '500',
                                    color: 'var(--text-secondary)'
                                }}
                                className="familiar-tool-tag"
                            >
                                <img 
                                    src={tool.iconUrl} 
                                    alt={tool.name} 
                                    className={tool.isInvert ? 'dark-invert' : ''} 
                                    style={{ width: '15px', height: '15px', objectFit: 'contain' }}
                                />
                                <span>{tool.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
