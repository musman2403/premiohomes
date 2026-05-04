import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

export default function SelfDrawingLine() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end center']
  });

  return (
    <div ref={ref} style={{ height: '200px', display: 'flex', justifyContent: 'center', margin: '40px 0' }}>
      <svg width="4" height="200" viewBox="0 0 4 200">
        <motion.line
          x1="2"
          y1="0"
          x2="2"
          y2="200"
          stroke="var(--color-primary)"
          strokeWidth="4"
          strokeLinecap="round"
          style={{ pathLength: scrollYProgress }}
        />
      </svg>
    </div>
  );
}
