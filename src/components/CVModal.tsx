import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  X, Download, Mail, Phone, MapPin, Github, Linkedin, 
  FileText, Award, BookOpen, Briefcase, Code, 
  Sparkles, Languages 
} from 'lucide-react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'interactive' | 'pdf'>('interactive');

  if (!isOpen) return null;

  return (
    <div className="cv-modal-backdrop" onClick={onClose}>
      <motion.div 
        className="cv-modal-content glass"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {/* Header */}
        <div className="cv-modal-header">
          <div className="cv-modal-title-wrapper">
            <h2 className="outfit cv-modal-title gradient-text">Curriculum Vitae</h2>
            <p className="outfit cv-modal-subtitle">Praveena Buddhini — Full-Stack Developer</p>
          </div>
          <div className="cv-modal-actions">
            <a 
              href="/Praveena_Buddhini_Master_CV.pdf" 
              download="Praveena Buddhini Master CV.pdf" 
              className="btn-cv-download outfit"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', fontSize: '0.85rem' }}
            >
              <Download size={15} />
              <span>Download PDF</span>
            </a>
            <button className="cv-modal-close-btn" onClick={onClose} aria-label="Close CV">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="cv-modal-tabs">
          <button 
            className={`cv-modal-tab outfit ${activeTab === 'interactive' ? 'active' : ''}`}
            onClick={() => setActiveTab('interactive')}
          >
            <Sparkles size={16} />
            <span>Interactive CV</span>
          </button>
          <button 
            className={`cv-modal-tab outfit ${activeTab === 'pdf' ? 'active' : ''}`}
            onClick={() => setActiveTab('pdf')}
          >
            <FileText size={16} />
            <span>Original PDF</span>
          </button>
        </div>

        {/* Body Container */}
        <div className="cv-modal-body">
          {activeTab === 'interactive' ? (
            <div className="interactive-cv-container">
              {/* Top Contact Row */}
              <div className="cv-header-card glass">
                <h1 className="outfit cv-name">Praveena Buddhini</h1>
                <p className="outfit cv-tagline">Full-Stack Developer | Bachelors in ICT Honors — University of Vavuniya</p>
                <div className="cv-contact-grid">
                  <span className="cv-contact-item">
                    <MapPin size={14} className="icon-purple" />
                    <span>Kalutara, Sri Lanka</span>
                  </span>
                  <a href="tel:+94703483039" className="cv-contact-item">
                    <Phone size={14} className="icon-purple" />
                    <span>+94 703483039</span>
                  </a>
                  <a href="mailto:praveenabuddini38@gmail.com" className="cv-contact-item">
                    <Mail size={14} className="icon-purple" />
                    <span>praveenabuddini38@gmail.com</span>
                  </a>
                  <a href="https://github.com/Praveena32" target="_blank" rel="noopener noreferrer" className="cv-contact-item">
                    <Github size={14} className="icon-purple" />
                    <span>GitHub Portfolio</span>
                  </a>
                  <a href="https://linkedin.com/in/praveena-buddhini" target="_blank" rel="noopener noreferrer" className="cv-contact-item">
                    <Linkedin size={14} className="icon-purple" />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="cv-columns-grid">
                {/* Left Column (Main details) */}
                <div className="cv-main-column">
                  {/* Summary */}
                  <div className="cv-section">
                    <h3 className="outfit cv-section-heading">
                      <Sparkles size={18} className="icon-purple" />
                      <span>Professional Summary</span>
                    </h3>
                    <p className="cv-text">
                      Passionate Bachelor of Information and Communication Technology (Honours) undergraduate at the University of Vavuniya, specializing in Full-Stack Development, Mobile Applications, and UI/UX Design. Proven track record of translating complex system requirements into scalable digital solutions through competitive hackathons and academic projects. Adept at leveraging modern frontend frameworks, mobile SDKs, and AI concepts to build intuitive, user-centered applications.
                    </p>
                  </div>

                  {/* Experience */}
                  <div className="cv-section">
                    <h3 className="outfit cv-section-heading">
                      <Briefcase size={18} className="icon-purple" />
                      <span>Professional Experience</span>
                    </h3>
                    <div className="cv-item">
                      <div className="cv-item-header">
                        <h4 className="outfit cv-item-title">Bank Trainee</h4>
                        <span className="cv-item-date">Sep 2022 – Aug 2023</span>
                      </div>
                      <p className="cv-item-subtitle">People's Bank (Kalutara South)</p>
                      <ul className="cv-bullets">
                        <li>Administered high-volume financial documentation and verified transaction accuracy under strict corporate compliance guidelines.</li>
                        <li>Collaborated across cross-functional teams to optimize daily branch operations and deliver efficient customer banking services.</li>
                        <li>Cultivated strong professional communication, problem-solving, and client relationship management skills.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Technical Projects */}
                  <div className="cv-section">
                    <h3 className="outfit cv-section-heading">
                      <Code size={18} className="icon-purple" />
                      <span>Technical Projects</span>
                    </h3>

                    {/* Project 1 */}
                    <div className="cv-item">
                      <div className="cv-item-header">
                        <h4 className="outfit cv-item-title">Nivora – AI-Powered Emotional Wellness App</h4>
                        <span className="cv-project-tech">React Native, Expo, TS, Express</span>
                      </div>
                      <ul className="cv-bullets">
                        <li>Architected and developed a cross-platform mobile application focused on accessible emotional wellness support.</li>
                        <li>Engineered an intuitive user interface and seamless navigation flows to optimize user engagement and accessibility.</li>
                        <li>Integrated AI-driven conversational modules to deliver interactive, responsive support capabilities for users.</li>
                      </ul>
                    </div>

                    {/* Project 2 */}
                    <div className="cv-item">
                      <div className="cv-item-header">
                        <h4 className="outfit cv-item-title">Wannasolo – Solo Travel Planning App Prototype</h4>
                        <span className="cv-project-tech">Figma</span>
                      </div>
                      <p className="cv-project-context">Developed for the IEEE Algoarena Designthon 2025</p>
                      <ul className="cv-bullets">
                        <li>Designed high-fidelity UI prototypes and complex user interaction flows for a dedicated solo travel ecosystem.</li>
                        <li>Conducted user-focused wireframing and design iterations centered heavily on usability, user psychology, and travel flow optimization.</li>
                      </ul>
                    </div>

                    {/* Project 3 */}
                    <div className="cv-item">
                      <div className="cv-item-header">
                        <h4 className="outfit cv-item-title">SUAMS – Attendance Management System</h4>
                        <span className="cv-project-tech">PHP, MySQL, HTML, CSS, JS</span>
                      </div>
                      <ul className="cv-bullets">
                        <li>Engineered a secure, web-based attendance management system to streamline university administrative tracking.</li>
                        <li>Implemented robust student authentication mechanisms and real-time attendance logging features.</li>
                        <li>Designed and normalized the relational database structure to ensure efficient data storage, security, and low-latency retrieval.</li>
                      </ul>
                    </div>

                    {/* Project 4 */}
                    <div className="cv-item">
                      <div className="cv-item-header">
                        <h4 className="outfit cv-item-title">Dishvana – Restaurant Web Platform</h4>
                        <span className="cv-project-tech">React, JS, HTML, CSS</span>
                      </div>
                      <ul className="cv-bullets">
                        <li>Developed a fully responsive restaurant e-commerce platform featuring a modern, highly interactive UI.</li>
                        <li>Built dynamic menu browsing, filtering components, and smooth user interaction states.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right Column (Sidebar details) */}
                <div className="cv-side-column">
                  {/* Education */}
                  <div className="cv-section">
                    <h3 className="outfit cv-section-heading">
                      <BookOpen size={18} className="icon-purple" />
                      <span>Education</span>
                    </h3>
                    <div className="cv-side-item">
                      <h4 className="outfit cv-side-item-title">Bachelor of ICT (Honours)</h4>
                      <p className="cv-side-item-desc">University of Vavuniya</p>
                      <p className="cv-side-item-date">July 2023 – July 2027</p>
                      <p className="cv-coursework"><strong>Relevant Coursework:</strong> Software Engineering, Database Systems, Web Development, Human-Computer Interaction (HCI), Mobile Computing</p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="cv-section">
                    <h3 className="outfit cv-section-heading">
                      <Code size={18} className="icon-purple" />
                      <span>Technical Skills</span>
                    </h3>
                    <div className="cv-skills-category">
                      <h5 className="outfit cv-skills-title">Core Frameworks & Tools</h5>
                      <div className="cv-skill-tags">
                        {['React Native', 'Expo', 'Tailwind CSS', 'React', 'Next.js', 'Framer Motion', 'Figma'].map(skill => (
                          <span key={skill} className="cv-skill-tag">{skill}</span>
                        ))}
                      </div>
                    </div>
                    <div className="cv-skills-category">
                      <h5 className="outfit cv-skills-title">Languages</h5>
                      <div className="cv-skill-tags">
                        {['JavaScript', 'TypeScript', 'PHP', 'SQL', 'Java', 'Python', 'C#', 'C++', 'Rust'].map(skill => (
                          <span key={skill} className="cv-skill-tag">{skill}</span>
                        ))}
                      </div>
                    </div>
                    <div className="cv-skills-category">
                      <h5 className="outfit cv-skills-title">Backend & Databases</h5>
                      <div className="cv-skill-tags">
                        {['Node.js', 'Express.js', 'Laravel', '.NET Core', 'MySQL', 'SQL Server', 'MongoDB', 'TiDB'].map(skill => (
                          <span key={skill} className="cv-skill-tag">{skill}</span>
                        ))}
                      </div>
                    </div>
                    <div className="cv-skills-category">
                      <h5 className="outfit cv-skills-title">Engineering & Tools</h5>
                      <div className="cv-skill-tags">
                        {['OOP', 'SDLC', 'REST APIs', 'Git', 'GitHub', 'Docker', 'Postman', 'Vercel'].map(skill => (
                          <span key={skill} className="cv-skill-tag">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="cv-section">
                    <h3 className="outfit cv-section-heading">
                      <Award size={18} className="icon-purple" />
                      <span>Certifications</span>
                    </h3>
                    <div className="cv-side-item">
                      <p className="cv-side-item-desc">Oracle Cloud Infrastructure 2025 AI Foundations Associate</p>
                    </div>
                  </div>

                  {/* Leadership & Awards */}
                  <div className="cv-section">
                    <h3 className="outfit cv-section-heading">
                      <Award size={18} className="icon-purple" />
                      <span>Awards & Leadership</span>
                    </h3>
                    <ul className="cv-side-list">
                      <li>6th Place Finalist – IEEE INNOVA Ideathon 2025</li>
                      <li>Top 11 Finalist – Hackforce'25 Salesforce Hackathon</li>
                      <li>Participant – IEEE Algoarena Designthon 2025</li>
                      <li>Participant – IEEE Lady Prototype 2.0 2026</li>
                      <li>Career Fair Organizing Committee Member (2026)</li>
                      <li>Active Member – IEEE Student Branch</li>
                      <li>Senior Prefect – Taxila Central College</li>
                    </ul>
                  </div>

                  {/* Additional Info */}
                  <div className="cv-section">
                    <h3 className="outfit cv-section-heading">
                      <Languages size={18} className="icon-purple" />
                      <span>Languages & Interests</span>
                    </h3>
                    <p className="cv-side-item-desc"><strong>Languages:</strong> Sinhala (Native), English (Professional)</p>
                    <p className="cv-side-item-desc" style={{ marginTop: '0.4rem' }}><strong>Core Interests:</strong> Full-Stack Dev, Mobile Engineering, UI/UX Architecture, AI, Prompt Engineering</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="pdf-cv-container">
              <iframe 
                src="/Praveena_Buddhini_Master_CV.pdf#toolbar=0" 
                title="Praveena Buddhini Master CV"
                className="cv-pdf-iframe"
              />
              <div className="cv-pdf-fallback glass">
                <FileText size={48} className="icon-purple" style={{ marginBottom: '1rem' }} />
                <h4 className="outfit" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>PDF Preview</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem', textAlign: 'center', maxWidth: '300px' }}>
                  If the preview does not load on your device, you can download the PDF file directly.
                </p>
                <a 
                  href="/Praveena_Buddhini_Master_CV.pdf" 
                  download="Praveena Buddhini Master CV.pdf" 
                  className="btn-primary outfit"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <Download size={16} />
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default CVModal;
