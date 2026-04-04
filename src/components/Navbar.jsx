import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
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
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? 'var(--surface-elevated)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent',
        transition: 'all var(--transition-fast)',
        backdropFilter: scrolled ? 'blur(12px)' : 'none'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
        <motion.a 
          href="#" 
          style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'inherit', originX: 0 }}
          whileHover={{ 
            scale: 1.05, 
            letterSpacing: '0.1em',
            color: 'var(--primary)',
            filter: 'drop-shadow(0 0 10px rgba(0,71,255,0.4))'
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800 }}>T</div>
          TABE.
        </motion.a>

        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#work" className="nav-link">Work</a>
          <a href="#referrals" className="nav-link">Referrals</a>
          <a href="/admin" className="nav-link" style={{ color: 'var(--text-muted)' }}>Login</a>
        </div>
      </div>
    </motion.nav>
  );
}
