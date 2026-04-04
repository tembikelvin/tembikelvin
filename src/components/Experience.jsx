import { motion } from 'framer-motion';

const experienceFiles = import.meta.glob('../content/experience/*.json', { eager: true });
const experiences = Object.values(experienceFiles)
  .sort((a, b) => b.order - a.order);

const skills = [
  { category: 'Frontend', items: ['React', 'JavaScript', 'HTML5', 'CSS3'] },
  { category: 'Backend & Data', items: ['Node.js', 'PHP', 'Python', 'SQL', 'MySQL', 'MongoDB'] },
  { category: 'Cybersecurity', items: ['Vulnerability Assessment', 'Network Security', 'Kali Linux', 'Maltego'] },
  { category: 'Tools & Creative', items: ['Git', 'Docker', 'Linux', 'Adobe Premiere Pro', 'Photoshop'] },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{ position: 'relative', zIndex: 1 }}
        >
          <h2 className="heading-lg">Experience</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', marginTop: '3rem' }}>
             {experiences.map((exp, idx) => (
                <div key={idx} style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '2px solid var(--border-color)' }}>
                  <div style={{ 
                    position: 'absolute', 
                    left: '-7px', 
                    top: '0', 
                    width: '12px', 
                    height: '12px', 
                    borderRadius: '50%', 
                    background: idx === 0 ? 'var(--primary)' : 'var(--text-muted)' 
                  }}></div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{exp.company}</h3>
                  <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                    {exp.role} | {exp.interval}
                  </p>
                  <p style={{ color: 'var(--text-muted)' }}>{exp.description}</p>
                </div>
             ))}
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="heading-lg">Technical Toolkit</h2>
          <p className="text-lead" style={{ marginBottom: '2rem' }}>A comprehensive overview of my technical capabilities.</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="card" style={{ padding: '1.5rem', borderLeft: '4px solid var(--primary)' }}>
                <h4 style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--text-main)' }}>{skillGroup.category}</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {skillGroup.items.map((item, i) => (
                    <span key={i} style={{ padding: '0.25rem 0.75rem', background: 'var(--surface)', border: '1px solid var(--border-color)', borderRadius: '99px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
