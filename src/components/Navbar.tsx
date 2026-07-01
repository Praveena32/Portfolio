import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText } from 'lucide-react';

import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="container nav-container">
        <motion.div
          className="logo outfit"
          whileHover={{ scale: 1.05 }}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <AnimatePresence>
            {scrolled && (
              <motion.div
                key="navbar-avatar-wrapper"
                initial={{ width: 0, opacity: 0, marginRight: 0 }}
                animate={{ width: '30px', opacity: 1, marginRight: '0.5rem' }}
                exit={{ width: 0, opacity: 0, marginRight: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                style={{ overflow: 'hidden', display: 'flex', alignItems: 'center' }}
              >
                <img
                  src="/image (3).jpg"
                  alt="Praveena"
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '1.5px solid var(--accent-primary)',
                    boxShadow: '0 0 10px rgba(139, 92, 246, 0.3)',
                    flexShrink: 0,
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
          <div>
            <span className="gradient-text">Praveena</span><span className="logo-portfolio-text"> | Portfolio</span>
          </div>
        </motion.div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }} className="nav-actions-wrapper">
          <ul className="nav-links">
            {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Achievements', 'Contact'].map((item) => (
              <li key={item}>
                <motion.a
                  href={`#${item.toLowerCase()}`}
                  className={`nav-link ${item === 'Home' ? 'active' : ''}`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              </li>
            ))}
          </ul>
          
          <a
            id="navbar-resume-download-btn"
            href="/Praveena_Buddhini_Master_CV.pdf"
            download="Praveena Buddhini Master CV.pdf"
            className="navbar-resume-btn outfit"
          >
            <FileText size={14} className="navbar-resume-icon" />
            <span className="navbar-resume-text">Resume</span>
          </a>

          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
