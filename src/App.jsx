import React, { useState, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import InteractiveGateway from './components/InteractiveGateway';
import Contact from './components/Contact';
import contactInfo from './content/site/contact.json';
import './index.css';

function App() {
  const { scrollYProgress } = useScroll();
  const [isUnlocked, setIsUnlocked] = useState(false);
  const gatewayRef = useRef(null);

  const scrollToGateway = () => {
    gatewayRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Interactive Reading Progress Bar */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, var(--primary), #00d4ff)',
          transformOrigin: '0%',
          scaleX: scrollYProgress,
          zIndex: 100,
          boxShadow: '0 0 10px rgba(0, 212, 255, 0.5)'
        }}
      />
      
      <Navbar />
      <Hero isUnlocked={isUnlocked} onWorkClick={scrollToGateway} />
      
      <div ref={gatewayRef}>
        <InteractiveGateway isUnlocked={isUnlocked} setIsUnlocked={setIsUnlocked}>
          <Experience />
          <Projects />
          <Testimonials />
          <Contact />
        </InteractiveGateway>
      </div>
      
      <footer style={{ background: 'var(--surface-elevated)', padding: '4rem 0', borderTop: '1px solid var(--border-color)', textAlign: 'center', marginTop: '4rem' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>Let's build something amazing together.</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Ready to elevate your digital presence?</p>
          <a href="#contact" className="btn btn-primary">Get in Touch</a>
          <br/>
          <span style={{ display: 'inline-block', marginTop: '4rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
            &copy; {new Date().getFullYear()} Tabe Kervine Tembi. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
