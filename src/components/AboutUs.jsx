import { useEffect, useRef } from 'react';
import familyImg from '../assets/images/family.webp';
import natureImg from '../assets/images/nature.webp';
import './AboutUs.css';

const stats = [
    { value: '10+', label: 'Years of Experience' },
    { value: 'Active', label: 'Development Phase' },
    { value: '100%', label: 'Transparency' },
    { value: 'Lahore', label: 'Primary Focus' },
];

const values = [
    {
        icon: '📍',
        title: 'Careful Selection',
        desc: 'Structured and transparent approach beginning with careful land selection in prime locations for maximum value.',
    },
    {
        icon: '📐',
        title: 'Professional Planning',
        desc: 'Thorough, professional planning and design ensuring a smooth, step-by-step development execution process.',
    },
    {
        icon: '🏗️',
        title: 'Quality Construction',
        desc: 'An unwavering focus on quality construction. We believe in building real homes with clarity, commitment, and trust.',
    },
];

export default function AboutUs() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('au-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        const animEls = sectionRef.current?.querySelectorAll('.au-animate');
        animEls?.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section className="about-us" id="about-us" ref={sectionRef}>
            {/* ── Hero banner ── */}
            <div className="au-banner">
                <img src={natureImg} alt="Premio Homes community" className="au-banner-img" width="1200" height="600" loading="lazy" decoding="async" />
                <div className="au-banner-overlay" />
                <div className="au-banner-text au-animate">
                    <span className="au-eyebrow">Trust Statement</span>
                    <h2>Building homes with<br />transparency.</h2>
                    <p>
                        We believe in building homes with transparency — not just making promises.
                        Primeo Homes is committed to delivering quality, honesty, and long-term
                        value to every client.
                    </p>
                </div>
            </div>

            {/* ── Stats row ── */}
            <div className="au-stats">
                {stats.map((s) => (
                    <div className="au-stat au-animate" key={s.label}>
                        <span className="au-stat-value">{s.value}</span>
                        <span className="au-stat-label">{s.label}</span>
                    </div>
                ))}
            </div>

            {/* ── Story section ── */}
            <div className="au-story">
                <div className="au-story-img au-animate">
                    <img src={familyImg} alt="Families at Premio Homes" width="600" height="400" loading="lazy" decoding="async" />
                </div>
                <div className="au-story-text au-animate">
                    <span className="au-eyebrow">Our Experience</span>
                    <h3>A decade of real estate expertise</h3>
                    <p>
                        Primeo Homes is backed by a team with over 10 years of experience in real
                        estate dealing, property management, and development planning. Our team
                        has been actively involved in multiple real estate activities across Lahore.
                    </p>
                    <p>
                        We are currently in the development phase, with planning, groundwork, and
                        project setup actively in progress. Our industry exposure enables us to better
                        understand market dynamics and share regular updates with our clients.
                    </p>
                    <a href="#about" className="au-link">
                        Status: Development in Progress
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </a>
                </div>
            </div>

            {/* ── Values ── */}
            <div className="au-values">
                <div className="au-values-header au-animate">
                    <span className="au-eyebrow">Our Development Approach</span>
                    <h3>Structured & Transparent</h3>
                </div>
                <div className="au-values-grid">
                    {values.map((v) => (
                        <div className="au-value-card au-animate" key={v.title}>
                            <span className="au-value-icon">{v.icon}</span>
                            <h4>{v.title}</h4>
                            <p>{v.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
