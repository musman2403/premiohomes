import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function Loader({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#121226',
        color: '#fff',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        style={{ fontSize: '2rem', fontFamily: 'Jost', marginBottom: '20px', letterSpacing: '4px' }}
      >
        PREMIO HOMES
      </motion.div>
      
      {/* Loading Skeleton Simulation */}
      <div style={{ width: '200px', height: '2px', background: 'rgba(255,255,255,0.2)', position: 'relative', overflow: 'hidden' }}>
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '50%', background: 'var(--color-primary)' }}
        />
      </div>
    </motion.div>
  );
}
