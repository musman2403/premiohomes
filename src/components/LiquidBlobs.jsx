import { motion } from 'framer-motion';

export default function LiquidBlobs() {
  return (
    <div className="liquid-container" style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: -1, pointerEvents: 'none' }}>
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 30 -10" result="goo" />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </svg>
      <div style={{ width: '100%', height: '100%', filter: 'url(#goo)' }}>
        <motion.div
          animate={{ x: [0, 150, -50, 0], y: [0, -150, 100, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          style={{ position: 'absolute', top: '20%', left: '20%', width: 300, height: 300, borderRadius: '50%', background: 'var(--color-primary)', opacity: 0.6 }}
        />
        <motion.div
          animate={{ x: [0, -200, 100, 0], y: [0, 200, -150, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          style={{ position: 'absolute', top: '50%', left: '60%', width: 400, height: 400, borderRadius: '50%', background: 'var(--color-primary-light)', opacity: 0.5 }}
        />
      </div>
    </div>
  );
}
