import { motion } from 'framer-motion';

const referrals = [
  {
    name: 'Jane Smith',
    company: 'Director of Product at InnovateTech',
    text: 'Working with Tabe was incredible. The level of detail and polish delivered was top-notch, far exceeding our design requirements.',
    videoId: 'dQw4w9WgXcQ', // default placeholder
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
  }
];

export default function Testimonials() {
  return (
    <section id="referrals" className="section">
      <div className="container">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <h2 className="heading-lg">Referrals & Testimonials</h2>
          <p className="text-lead" style={{ margin: '0 auto' }}>
            Feedback and video testimonials from clients and collaborators.
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {referrals.map((ref, idx) => (
            <motion.div 
              key={idx}
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap', alignItems: 'center', padding: '3rem' }}
            >
              {/* Video Embed */}
              <div style={{ flex: '1 1 400px', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', background: '#000' }}>
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                  <iframe 
                    src={`https://www.youtube.com/embed/${ref.videoId}`} 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  ></iframe>
                </div>
              </div>
              
              {/* Text Content */}
              <div style={{ flex: '1 1 300px' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="var(--primary-light)" style={{ marginBottom: '1.5rem' }}>
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p style={{ fontSize: '1.25rem', fontStyle: 'italic', color: 'var(--text-main)', marginBottom: '2rem', lineHeight: 1.8 }}>
                  "{ref.text}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <img src={ref.image} alt={ref.name} style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover' }} />
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-main)' }}>{ref.name}</h4>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{ref.company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
