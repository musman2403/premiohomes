import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function Faux3DCard({ children, className = '' }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-200, 200], [15, -15]);
  const rotateY = useTransform(x, [-200, 200], [-15, 15]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000,
        display: 'inline-block'
      }}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      className={`faux-3d-wrapper ${className}`}
    >
      <div style={{ transform: 'translateZ(40px)', transition: 'transform 0.2s ease-out' }}>
        {children}
      </div>
    </motion.div>
  );
}
