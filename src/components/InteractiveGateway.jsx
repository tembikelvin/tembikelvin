import { useState } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { KeyIcon, LockOpenIcon } from '@heroicons/react/24/outline';

export default function InteractiveGateway({ children }) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const controls = useAnimation();

  const handleDragEnd = (event, info) => {
    // If user dragged the thumb more than 180px right
    if (info.offset.x > 180) {
      setIsUnlocked(true);
    } else {
      // Snap it back
      controls.start({ x: 0, transition: { type: 'spring', stiffness: 300, damping: 20 } });
    }
  };

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <AnimatePresence mode="wait">
        {!isUnlocked ? (
          <motion.div
            key="lock-screen"
            exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            transition={{ duration: 0.5 }}
            className="section"
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '40vh',
              background: 'var(--surface)',
              borderTop: '1px solid var(--border-color)',
              borderBottom: '1px solid var(--border-color)',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '4rem', padding: '0 2rem' }}>
              <KeyIcon style={{ width: '4rem', height: '4rem', color: 'var(--primary)', margin: '0 auto 1.5rem' }} />
              <h2 className="heading-md" style={{ color: 'var(--text-main)', letterSpacing: '-0.02em', textTransform: 'none' }}>Your Vision, Unlocked.</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
                Building exceptional software isn't just about writing code—it's a collaborative journey. 
                You aren't a spectator; you are the most vital piece in engineering the perfect outcome.
              </p>
            </div>

            {/* The Drag Track */}
            <div style={{
              width: '340px',
              height: '70px',
              background: 'var(--surface-elevated)',
              borderRadius: '99px',
              border: '2px solid var(--border-color)',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              padding: '0 8px',
              boxShadow: 'inset 0 4px 6px rgba(0,0,0,0.05)'
            }}>
              <span style={{ position: 'absolute', width: '100%', left: 0, textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.05em', pointerEvents: 'none', zIndex: 1 }}>
                SLIDE TO UNLOCK &rarr;
              </span>

              {/* The Draggable Thumb */}
              <motion.div
                 drag="x"
                 dragConstraints={{ left: 0, right: 234 }}
                 dragElastic={0.1}
                 onDragEnd={handleDragEnd}
                 animate={controls}
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ cursor: 'grabbing' }}
                 style={{
                   width: '50px',
                   height: '50px',
                   background: 'linear-gradient(135deg, var(--primary), #00d4ff)',
                   borderRadius: '50%',
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center',
                   cursor: 'grab',
                   position: 'relative',
                   zIndex: 10,
                   boxShadow: 'var(--shadow-blue)'
                 }}
              >
                <LockOpenIcon style={{ width: '24px', height: '24px', color: 'white' }} />
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 50, filter: 'blur(5px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
