import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import HeroParticles from './HeroParticles';

export default function Hero() {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const yImage = useTransform(scrollY, [0, 800], [0, -100]);

  return (
    <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '120px', position: 'relative' }}>
      <HeroParticles />
      <div className="container" style={{ position: 'relative', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '4rem' }}>
        
        {/* Left Side: Text */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ y: yText, opacity, flex: '1 1 500px' }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem 1rem', background: 'var(--surface-elevated)', borderRadius: '999px', marginBottom: '2rem', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981' }}></span>
            <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>Full-Stack Developer & Cybersecurity Specialist</span>
          </div>
          
          <h1 className="heading-xl">
            Hi, I'm Tabe Kervine.<br/>
            I build <span className="text-gradient">secure applications.</span>
            <span className="cursor-blink">_</span>
          </h1>
          
          <p className="text-lead">
            I am a Software Engineer experienced in <strong>React, Node.js, PHP, and Python</strong>. From creating robust E-Commerce platforms to integrating third-party APIs and conducting vulnerability assessments—I bridge the gap between design, performance, and security.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#work" className="btn btn-primary">
              View My Work <ArrowRight size={20} />
            </a>
            <a href="/Tabe%20Kervine%20Tembi%20CV.pdf" download className="btn btn-secondary">
              Download CV <Download size={20} />
            </a>
          </div>
        </motion.div>

        {/* Right Side: Image Parallax */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.2, duration: 1 }}
           style={{
             y: yImage,
             flex: '1 1 400px',
             position: 'relative',
             maxWidth: '450px'
           }}
        >
          {/* Decorative Blur */}
          <div style={{
            position: 'absolute',
            inset: '-20%',
            background: 'linear-gradient(135deg, var(--primary), #00d4ff)',
            filter: 'blur(80px)',
            opacity: 0.3,
            borderRadius: '50%',
            zIndex: -1
          }}></div>

          <div style={{
             width: '100%',
             aspectRatio: '4/5',
             borderRadius: 'var(--radius-lg)',
             overflow: 'hidden',
             boxShadow: 'var(--shadow-xl)',
             border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <img src="./profile.jpg" alt="Tabe Kervine Tembi" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
