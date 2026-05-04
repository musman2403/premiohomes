import useScrollReveal from '../hooks/useScrollReveal';
import './Amenities.css';

const amenities = [
    {
        name: 'Fitness Center', icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6.5 6.5h11M6.5 17.5h11M2 12h3m14 0h3M5 12V8.5a1.5 1.5 0 0 1 3 0v7a1.5 1.5 0 0 1-3 0V12zm11 0V8.5a1.5 1.5 0 0 1 3 0v7a1.5 1.5 0 0 1-3 0V12z" /></svg>
        )
    },
    {
        name: 'Swimming Pool', icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20c2-1 4 1 6 0s4-1 6 0 4 1 6 0M2 16c2-1 4 1 6 0s4-1 6 0 4 1 6 0" /><path d="M8 12V4m0 0L6 6m2-2 2 2m4 6V4m0 0-2 2m2-2 2 2" /></svg>
        )
    },
    {
        name: 'Parking', icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M9 17V7h4a3 3 0 0 1 0 6H9" /></svg>
        )
    },
    {
        name: 'Free WiFi', icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01" /></svg>
        )
    },
    {
        name: 'Laundry', icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="2" width="18" height="20" rx="2" /><circle cx="12" cy="13" r="5" /><circle cx="12" cy="13" r="2" /><line x1="7" y1="6" x2="7" y2="6" /><line x1="10" y1="6" x2="10" y2="6" /></svg>
        )
    },
    {
        name: 'Pet Friendly', icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="4" r="2" /><circle cx="18" cy="8" r="2" /><circle cx="4" cy="8" r="2" /><circle cx="8" cy="4" r="2" /><path d="M8 14c-1.5 2-2 4-1 6 1.5 2.5 5.5 2.5 8 1 2-1.5 3-4 1-6-1.5-1.5-3-2-4-2s-2.5.5-4 2z" /></svg>
        )
    },
    {
        name: 'Concierge', icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20H6V10l6-6 6 6v10z" /><path d="M9 20v-6h6v6" /></svg>
        )
    },
    {
        name: 'Rooftop', icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
        )
    },
];

export default function Amenities() {
    const sectionRef = useScrollReveal();

    return (
        <section className="amenities" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title" style={{ textAlign: 'center' }} data-reveal>Amenities</h2>
                <div className="amenities-grid" data-reveal="slide-up" style={{ transitionDelay: '0.15s' }}>
                    {amenities.map((a) => (
                        <div className="amenity-item" key={a.name}>
                            <div className="amenity-icon">{a.icon}</div>
                            <span className="amenity-label">{a.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
