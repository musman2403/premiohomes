import { useState, useEffect, useRef } from 'react';
import './Stats.css';

const statsData = [
  { end: 10, suffix: '+', label: 'Years of Excellence' },
  { end: 100, suffix: '%', label: 'Client Satisfaction' },
  { end: 120, suffix: '+', label: 'Residences Delivered' },
];

function useCountUp(end, duration = 2200, trigger = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let startTime = null;
    let id;

    const animate = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) id = requestAnimationFrame(animate);
    };

    id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, [end, duration, trigger]);

  return count;
}

export default function Stats() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats" ref={ref} aria-label="Our Track Record">
      <div className="stats-grid">
        {statsData.map((stat) => (
          <StatItem key={stat.label} {...stat} trigger={visible} />
        ))}
      </div>
    </section>
  );
}

function StatItem({ end, suffix, label, trigger }) {
  const count = useCountUp(end, 2200, trigger);
  return (
    <div className="stat-item">
      <span className="stat-number">{count}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}
