import { useState, useEffect, useCallback } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Testimonials.css';

const testimonials = [
    {
        name: 'Ahmed Raza',
        role: 'Property Investor',
        text: 'Premio Homes exceeded all my expectations. The transparency in their payment plans and the quality of construction gave me complete confidence in my investment.',
        rating: 5,
    },
    {
        name: 'Fatima Khan',
        role: 'Homeowner',
        text: 'From the first consultation to getting my keys, the entire process was seamless. The team truly cares about delivering on their promises. Highly recommended!',
        rating: 5,
    },
    {
        name: 'Usman Ali',
        role: 'First-time Buyer',
        text: 'I was nervous about buying my first property, but Premio Homes made it incredibly easy. The installment plan is genuinely flexible and there were zero hidden charges.',
        rating: 5,
    },
    {
        name: 'Sara Malik',
        role: 'Real Estate Analyst',
        text: 'As someone who evaluates properties professionally, I can say Premio Homes offers exceptional value. Strategic locations, modern design, and solid build quality.',
        rating: 4,
    },
];

export default function Testimonials() {
    const [active, setActive] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const sectionRef = useScrollReveal();

    const next = useCallback(() => {
        setActive((prev) => (prev + 1) % testimonials.length);
    }, []);

    const prev = useCallback(() => {
        setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }, []);

    // Auto-rotate every 5 seconds
    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(next, 5000);
        return () => clearInterval(interval);
    }, [isPaused, next]);

    const t = testimonials[active];

    return (
        <section className="testimonials section" ref={sectionRef}>
            <div className="container">
                <div className="testimonials-header" data-reveal>
                    <span className="testimonials-eyebrow">Client Stories</span>
                    <h2 className="section-title">What Our Clients Say</h2>
                </div>

                <div
                    className="testimonials-slider"
                    data-reveal
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <button className="testimonials-arrow testimonials-arrow--prev" onClick={prev} aria-label="Previous testimonial">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </button>

                    <div className="testimonials-card" key={active}>
                        <div className="testimonials-stars">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <svg key={i} className={`star ${i < t.rating ? 'star--filled' : ''}`} width="18" height="18" viewBox="0 0 24 24" fill={i < t.rating ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                </svg>
                            ))}
                        </div>
                        <blockquote className="testimonials-quote">
                            &ldquo;{t.text}&rdquo;
                        </blockquote>
                        <div className="testimonials-author">
                            <div className="testimonials-avatar">
                                {t.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                                <div className="testimonials-name">{t.name}</div>
                                <div className="testimonials-role">{t.role}</div>
                            </div>
                        </div>
                    </div>

                    <button className="testimonials-arrow testimonials-arrow--next" onClick={next} aria-label="Next testimonial">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </button>
                </div>

                <div className="testimonials-dots">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            className={`testimonials-dot ${i === active ? 'active' : ''}`}
                            onClick={() => setActive(i)}
                            aria-label={`Go to testimonial ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
