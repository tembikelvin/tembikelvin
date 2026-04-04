import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import contactInfo from '../content/site/contact.json';

const TiltCard = ({ children, href, delay = 0 }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), { stiffness: 100, damping: 30 });

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    x.set(mouseX - width / 2);
    y.set(mouseY - height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const Tag = href ? motion.a : motion.div;

  return (
    <Tag
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        textDecoration: 'none'
      }}
      className="glass-card glow-card"
    >
      <div style={{ padding: '3rem', transform: 'translateZ(50px)' }}>
        {children}
      </div>
    </Tag>
  );
};

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ background: 'var(--surface)', overflow: 'hidden' }}>
      {/* Dynamic Background Elements */}
      <div className="blob" style={{ top: '10%', left: '5%', background: 'linear-gradient(135deg, var(--primary), #00d4ff)' }}></div>
      <div className="blob" style={{ bottom: '10%', right: '5%', animationDelay: '-5s', width: '400px', height: '400px', opacity: 0.1 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           style={{ marginBottom: '5rem' }}
        >
          <div style={{ display: 'inline-block', padding: '0.5rem 1.25rem', borderRadius: '99px', background: 'rgba(0, 71, 255, 0.1)', color: 'var(--primary)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>
            Available for Projects
          </div>
          <h2 className="heading-lg">Elevate Your Presence.</h2>
          <p className="text-lead" style={{ margin: '0 auto' }}>
            Ready to build something extraordinary? Reach out via any of the channels below.
          </p>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2.5rem',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          {/* Phone Card */}
          <TiltCard href={`tel:${contactInfo.phone}`} delay={0.1}>
            <div style={{ 
              width: '80px', 
              height: '80px', 
              borderRadius: '24px', 
              background: 'linear-gradient(135deg, var(--primary), #00d4ff)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              color: 'white',
              margin: '0 auto 2rem auto',
              boxShadow: '0 10px 30px rgba(0, 71, 255, 0.4)'
            }}>
              <PhoneIcon style={{ width: '40px' }} />
            </div>
            <h4 style={{ fontWeight: 800, fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Phone</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>Direct Line & WhatsApp</p>
            <div style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '1.2rem' }}>+{contactInfo.phone}</div>
          </TiltCard>

          {/* Email Card */}
          <TiltCard href={`mailto:${contactInfo.email}`} delay={0.2}>
            <div style={{ 
              width: '80px', 
              height: '80px', 
              borderRadius: '24px', 
              background: 'linear-gradient(135deg, var(--primary), #00d4ff)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              color: 'white',
              margin: '0 auto 2rem auto',
              boxShadow: '0 10px 30px rgba(0, 71, 255, 0.4)'
            }}>
              <EnvelopeIcon style={{ width: '40px' }} />
            </div>
            <h4 style={{ fontWeight: 800, fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Email</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>Professional Projects</p>
            <div style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '1.2rem' }}>{contactInfo.email}</div>
          </TiltCard>

          {/* Location Card */}
          <TiltCard delay={0.3}>
            <div style={{ 
              width: '80px', 
              height: '80px', 
              borderRadius: '24px', 
              background: 'linear-gradient(135deg, #1e293b, #0f172a)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              color: 'white',
              margin: '0 auto 2rem auto',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
            }}>
              <MapPinIcon style={{ width: '40px' }} />
            </div>
            <h4 style={{ fontWeight: 800, fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Location</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>Remote & Local Works</p>
            <div style={{ color: 'var(--text-main)', fontWeight: 700, fontSize: '1.2rem' }}>{contactInfo.location}</div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
