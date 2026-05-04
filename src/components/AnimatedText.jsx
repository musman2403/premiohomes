import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AnimatedText({ text, el: Wrapper = 'p', className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });
  
  const defaultAnimations = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.1 } }
  };

  return (
    <Wrapper className={className} ref={ref}>
      <motion.span
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ staggerChildren: 0.02 }}
        aria-hidden
      >
        {text.split('').map((char, i) => (
          <motion.span key={i} variants={defaultAnimations} style={{ display: 'inline-block' }}>
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.span>
      <span className="sr-only" style={{position: 'absolute', width: 1, height: 1, overflow: 'hidden'}}>{text}</span>
    </Wrapper>
  );
}
