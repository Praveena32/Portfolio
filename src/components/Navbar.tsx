import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
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
        >
          <span className="gradient-text">Portfolio</span>.
        </motion.div>
        <ul className="nav-links">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
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
      </div>
    </motion.nav>
  );
};

export default Navbar;
