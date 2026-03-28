import { useState, useEffect, useRef } from 'react';
import './Stats.css';

const statsData = [
    { end: 10, suffix: '+', label: 'Years of Experience in Real Estate' },
    { end: 100, suffix: '%', label: 'Commitment to Transparency' },
    { end: 100, suffix: '%', label: 'Focus on Client Satisfaction' },
];

function useCountUp(end, duration = 2000, trigger = false) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!trigger) return;

        let startTime = null;
        let animationFrameId;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            
            setCount(Math.floor(percentage * end));

            if (percentage < 1) {
                animationFrameId = requestAnimationFrame(animate);
            }
        };

        animationFrameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrameId);
    }, [end, duration, trigger]);

    return count;
}

export default function Stats() {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="stats" ref={ref}>
            <div className="container">
                <div className="stats-grid">
                    {statsData.map((stat) => (
                        <StatItem key={stat.label} {...stat} trigger={visible} />
                    ))}
                </div>
                <div className="stats-dots">
                    {Array.from({ length: 7 }).map((_, i) => (
                        <div key={i} className={`stats-dot ${i === 3 ? 'active' : ''}`}></div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function StatItem({ end, suffix, label, trigger }) {
    const count = useCountUp(end, 2000, trigger);
    return (
        <div className="stat-item">
            <span className="stat-number">{count}{suffix}</span>
            <span className="stat-label">{label}</span>
        </div>
    );
}
