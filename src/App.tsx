import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Background from './components/Background';
import ProjectDetails from './components/ProjectDetails';
import CursorFollower from './components/CursorFollower';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('theme');
    return (saved as 'dark' | 'light') || 'dark';
  });

  const [currentProjectId, setCurrentProjectId] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/project/')) {
        const id = hash.replace('#/project/', '');
        setCurrentProjectId(id);
      } else {
        setCurrentProjectId(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleBackToHome = () => {
    window.location.hash = '#projects';
  };

  return (
    <div className="app">
      <Background />
      <CursorFollower />
      <Analytics />
      {!currentProjectId && (
        <motion.div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
            transformOrigin: '0%',
            scaleX: scrollProgress / 100,
            zIndex: 2000,
          }}
        />
      )}
      {!currentProjectId && <Navbar theme={theme} toggleTheme={toggleTheme} />}
      <main className="main-content">
        {currentProjectId ? (
          <ProjectDetails projectId={currentProjectId} onBack={handleBackToHome} />
        ) : (
          <>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Achievements />
            <Contact />
          </>
        )}
      </main>
      <footer className="glass" style={{ padding: '1.5rem 0', textAlign: 'center', borderTop: '1px solid var(--card-border)' }}>
        <p className="outfit" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} M. P. B. Kalpana | University of Vavuniya. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
