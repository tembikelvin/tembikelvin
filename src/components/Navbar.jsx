import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Work', href: '#work' },
    { name: 'Referrals', href: '#referrals' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled || isMenuOpen ? 'var(--surface-elevated)' : 'transparent',
          borderBottom: (scrolled || isMenuOpen) ? '1px solid var(--border-color)' : '1px solid transparent',
          transition: 'all var(--transition-fast)',
          backdropFilter: (scrolled || isMenuOpen) ? 'blur(12px)' : 'none'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
          <motion.a 
            href="#" 
            onClick={handleLinkClick}
            style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'inherit', originX: 0, zIndex: 101 }}
            whileHover={{ scale: 1.05 }}
          >
            <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800 }}>T</div>
            TABE.
          </motion.a>

          {/* Desktop Links */}
          <div className="nav-desktop" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">{link.name}</a>
            ))}
            <a href="/admin" className="nav-link" style={{ color: 'var(--text-muted)' }}>Login</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="nav-mobile-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ zIndex: 101, padding: '0.5rem', color: 'var(--text-main)' }}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'var(--surface)',
              zIndex: 99,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
              gap: '2.5rem'
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-main)', textDecoration: 'none' }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a 
              href="/admin" 
              onClick={handleLinkClick}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
              style={{ fontSize: '1.25rem', color: 'var(--text-muted)', textDecoration: 'none', borderTop: '1px solid var(--border-color)', width: '100%', textAlign: 'center', paddingTop: '2.5rem' }}
            >
              Admin Login
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
