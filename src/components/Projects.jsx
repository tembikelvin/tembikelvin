import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { CodeBracketIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    title: 'EMASDEVI',
    description: 'An international NGO platform dedicated to environmental protection, sustainable development, and community empowerment in Cameroon.',
    image: 'https://api.microlink.io?url=https://www.emasdevi.org&screenshot=true&meta=false&embed=screenshot.url',
    link: 'https://www.emasdevi.org'
  },
  {
    title: 'Time2Eat',
    description: 'A modern food service and delivery web platform built for seamless user experience and quick access to meals in Bamenda.',
    image: 'https://api.microlink.io?url=https://www.time2eat.org&screenshot=true&meta=false&embed=screenshot.url',
    link: 'https://www.time2eat.org'
  },
  {
    title: 'Full-Stack E-Commerce Platform',
    description: 'A highly optimized online shopping destination featuring secure payment gateways and robust inventory management.',
    image: null,
    link: '#'
  },
  {
    title: 'School & Library Management Systems',
    description: 'Internal operational tools designed to handle structural data, built with strong foundational database architecture.',
    image: null,
    link: '#'
  }
];

export default function Projects() {
  return (
    <section id="work" className="section" style={{ 
      background: 'var(--surface)',
      backgroundImage: `
        linear-gradient(135deg, rgba(0, 71, 255, 0.03), rgba(0, 212, 255, 0.03)),
        linear-gradient(var(--border-color) 1px, transparent 1px),
        linear-gradient(90deg, var(--border-color) 1px, transparent 1px)
      `,
      backgroundSize: '100% 100%, 60px 60px, 60px 60px',
      backgroundPosition: '0 0, -1px -1px, -1px -1px'
    }}>
      <div className="container">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="heading-lg">Selected Work</h2>
          <p className="text-lead" style={{ marginBottom: '4rem' }}>
            A collection of my recent deployed platforms and internal tools. Each thumbnail represents the live application front page.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          {projects.map((project, idx) => (
            <motion.a 
              href={project.link}
              target="_blank"
              rel="noreferrer"
              key={idx}
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              style={{ display: 'block', padding: 0, overflow: 'hidden', textDecoration: 'none' }}
            >
              <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden', background: 'var(--surface-elevated)', position: 'relative' }}>
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = `https://placehold.co/600x400/0f172a/00d4ff?text=${encodeURIComponent(project.title)}`;
                    }}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }} 
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                ) : (
                  <div style={{
                    width: '100%', height: '100%', 
                    background: 'linear-gradient(135deg, var(--primary), #00d4ff)',
                    padding: '3px',
                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <div style={{
                      width: '100%', height: '100%',
                      background: 'var(--surface-elevated)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <CodeBracketIcon style={{ width: '4rem', height: '4rem', color: 'var(--primary)' }} />
                    </div>
                  </div>
                )}
              </div>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {project.title} <ExternalLink size={20} color="var(--primary)" />
                </h3>
                <p style={{ color: 'var(--text-muted)' }}>{project.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
