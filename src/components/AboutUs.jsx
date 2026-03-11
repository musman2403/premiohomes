import { useEffect, useRef } from 'react';
import familyImg from '../assets/images/family.png';
import natureImg from '../assets/images/nature.png';
import './AboutUs.css';

const stats = [
    { value: '15+', label: 'Years of Experience' },
    { value: '500+', label: 'Happy Residents' },
    { value: '12', label: 'Award-Winning Properties' },
    { value: '98%', label: 'Resident Satisfaction' },
];

const values = [
    {
        icon: '🌿',
        title: 'Sustainability',
        desc: 'Every building we design respects the land it stands on. We use eco-friendly materials and energy-efficient systems as standard.',
    },
    {
        icon: '🏛️',
        title: 'Craftsmanship',
        desc: 'From foundation to finishing, we hold every detail to the highest standard — beautifully built spaces that stand the test of time.',
    },
    {
        icon: '🤝',
        title: 'Community',
        desc: 'We don\'t just build residences — we cultivate communities where neighbors become friends and spaces become homes.',
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
                <img src={natureImg} alt="Premio Homes community" className="au-banner-img" />
                <div className="au-banner-overlay" />
                <div className="au-banner-text au-animate">
                    <span className="au-eyebrow">About Premio Homes</span>
                    <h2>Built on passion.<br />Rooted in nature.</h2>
                    <p>
                        For over a decade, Premio Homes has been crafting residences that bring
                        people closer to the world around them — without sacrificing a single
                        comfort of modern life.
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
                    <img src={familyImg} alt="Families at Premio Homes" />
                </div>
                <div className="au-story-text au-animate">
                    <span className="au-eyebrow">Our Story</span>
                    <h3>Where luxury meets the landscape</h3>
                    <p>
                        Premio Homes was founded in 2009 with a single conviction: that great
                        architecture should never come at the expense of the environment. Starting
                        with a handful of properties in the Appalachian foothills, we have grown
                        into one of the most respected residential developers in the Southeast.
                    </p>
                    <p>
                        Each of our communities is master-planned to integrate with its natural
                        surroundings — preserving green corridors, native plantings, and open
                        spaces that residents can enjoy year-round. The result is a collection of
                        homes that feel as alive as the landscapes they inhabit.
                    </p>
                    <a href="#about" className="au-link">
                        Explore our residences
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </a>
                </div>
            </div>

            {/* ── Values ── */}
            <div className="au-values">
                <div className="au-values-header au-animate">
                    <span className="au-eyebrow">What We Stand For</span>
                    <h3>Our core values</h3>
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
