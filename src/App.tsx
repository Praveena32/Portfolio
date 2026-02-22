import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Background from './components/Background';

function App() {
  return (
    <div className="app">
      <Background />
      <Navbar />
      <main className="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="glass" style={{ padding: '2rem 0', textAlign: 'center', marginTop: '4rem', borderTop: '1px solid var(--card-border)' }}>
        <p className="outfit" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} ICT Honors Student | University of Vavuniya. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
