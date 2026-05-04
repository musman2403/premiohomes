import useScrollReveal from '../hooks/useScrollReveal';
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
    const sectionRef = useScrollReveal();

    return (
        <section className="about-us cinema-section" id="about-us" ref={sectionRef}>
            {/* ── Stats row ── */}
            <div className="au-stats">
                {stats.map((s, i) => (
                    <div className="au-stat" data-cinema="rise" data-cinema-delay={i + 1} key={s.label}>
                        <span className="au-stat-value">{s.value}</span>
                        <span className="au-stat-label">{s.label}</span>
                    </div>
                ))}
            </div>

            {/* ── Story section ── */}
            <div className="au-story">
                <div className="au-story-img" data-cinema="tilt-left">
                    <img src={familyImg} alt="Families at Premio Homes" width="600" height="400" loading="lazy" decoding="async" />
                </div>
                <div className="au-story-text" data-cinema="tilt-right" data-cinema-delay="2">
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

            <hr className="cinema-divider" />

            {/* ── Vision & Mission ── */}
            <div className="au-vision">
                <div className="au-vision-card" data-cinema="tilt-left">
                    <div className="au-vision-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                    </div>
                    <h3>Our Vision</h3>
                    <p>To become Lahore's most trusted name in transparent, quality-driven real estate development — building communities, not just buildings.</p>
                </div>
                <div className="au-vision-card" data-cinema="tilt-right" data-cinema-delay="2">
                    <div className="au-vision-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                            <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/>
                            <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                        </svg>
                    </div>
                    <h3>Our Mission</h3>
                    <p>To deliver well-planned residential projects with flexible payment plans, ensuring every family can own a quality home without compromises.</p>
                </div>
            </div>

            <hr className="cinema-divider" />

            {/* ── Values ── */}
            <div className="au-values">
                <div className="au-values-header" data-cinema="rise">
                    <span className="au-eyebrow">Our Development Approach</span>
                    <h3>Structured & Transparent</h3>
                </div>
                <div className="au-values-grid">
                    {values.map((v, i) => (
                        <div className="au-value-card cinema-card" data-cinema="flip" data-cinema-delay={i + 1} key={v.title}>
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
