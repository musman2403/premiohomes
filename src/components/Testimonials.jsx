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
    text: 'From the first consultation to getting my keys, the entire process was seamless. The team truly cares about delivering on their promises. Highly recommended.',
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
    text: 'As someone who evaluates properties professionally, I can say Premio Homes offers exceptional value. Strategic location, modern design, and solid build quality.',
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

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [isPaused, next]);

  const t = testimonials[active];

  return (
    <section
      className="testimonials section"
      ref={sectionRef}
      aria-label="Client Testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container">
        <div className="testimonials-inner">
          {/* Left — featured large quote */}
          <div className="testimonials-featured" data-reveal="slide-left">
            <div className="testimonials-header">
              <span className="testimonials-eyebrow">Client Stories</span>
              <h2 className="section-title">What Our Clients Say</h2>
            </div>

            <div className="testimonials-stars" aria-label={`${t.rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={`star ${i < t.rating ? 'star--filled' : ''}`}>
                  <svg viewBox="0 0 24 24" fill={i < t.rating ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </span>
              ))}
            </div>

            <blockquote className="testimonials-quote">
              &ldquo;{t.text}&rdquo;
            </blockquote>

            <div className="testimonials-author">
              <div className="testimonials-avatar" aria-hidden="true">
                {t.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <div>
                <div className="testimonials-name">{t.name}</div>
                <div className="testimonials-role">{t.role}</div>
              </div>
            </div>

            {/* Navigation */}
            <div className="testimonials-nav">
              <button className="testimonials-arrow" onClick={prev} aria-label="Previous testimonial">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button className="testimonials-arrow" onClick={next} aria-label="Next testimonial">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right — clickable stack */}
          <div className="testimonials-stack" data-reveal="slide-right">
            {testimonials.map((item, i) => (
              <button
                key={i}
                className={`testimonials-card ${i === active ? 'active' : ''}`}
                onClick={() => { setActive(i); setIsPaused(true); }}
                aria-label={`View testimonial from ${item.name}`}
              >
                <p className="testimonials-card-quote">&ldquo;{item.text}&rdquo;</p>
                <div className="testimonials-card-author">
                  <div className="testimonials-card-avatar" aria-hidden="true">
                    {item.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <div className="testimonials-card-name">{item.name}</div>
                    <div className="testimonials-card-role">{item.role}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
