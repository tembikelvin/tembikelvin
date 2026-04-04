import React from 'react';
import { motion } from 'framer-motion';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import contactInfo from '../content/site/contact.json';

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ background: 'var(--surface-elevated)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="heading-lg">Get In Touch</h2>
          <p className="text-lead" style={{ maxWidth: '600px', margin: '0 auto 4rem auto' }}>
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {/* Phone Card */}
          <motion.a 
            href={`tel:${contactInfo.phone}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="card"
            style={{ padding: '3rem', textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}
          >
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(0, 71, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
              <PhoneIcon style={{ width: '32px' }} />
            </div>
            <div>
              <h4 style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-main)' }}>Phone</h4>
              <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '1.1rem' }}>+{contactInfo.phone}</p>
            </div>
          </motion.a>

          {/* Email Card */}
          <motion.a 
            href={`mailto:${contactInfo.email}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ delay: 0.1 }}
            className="card"
            style={{ padding: '3rem', textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}
          >
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(0, 71, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
              <EnvelopeIcon style={{ width: '32px' }} />
            </div>
            <div>
              <h4 style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-main)' }}>Email</h4>
              <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '1.1rem' }}>{contactInfo.email}</p>
            </div>
          </motion.a>

          {/* Location Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ delay: 0.2 }}
            className="card"
            style={{ padding: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}
          >
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(0, 71, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
              <MapPinIcon style={{ width: '32px' }} />
            </div>
            <div>
              <h4 style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-main)' }}>Location</h4>
              <p style={{ color: 'var(--text-muted)', fontWeight: 500, fontSize: '1.1rem' }}>{contactInfo.location}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
