import useScrollReveal from '../hooks/useScrollReveal';
import './Amenities.css';

const amenities = [
  {
    name: 'Fitness Center',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.5 6.5h11M6.5 17.5h11M2 12h3m14 0h3M5 12V8.5a1.5 1.5 0 0 1 3 0v7a1.5 1.5 0 0 1-3 0V12zm11 0V8.5a1.5 1.5 0 0 1 3 0v7a1.5 1.5 0 0 1-3 0V12z" />
      </svg>
    ),
  },
  {
    name: 'Swimming Pool',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20c2-1 4 1 6 0s4-1 6 0 4 1 6 0M2 16c2-1 4 1 6 0s4-1 6 0 4 1 6 0" />
        <path d="M8 12V4m0 0L6 6m2-2 2 2m4 6V4m0 0-2 2m2-2 2 2" />
      </svg>
    ),
  },
  {
    name: 'Covered Parking',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
      </svg>
    ),
  },
  {
    name: 'Smart WiFi',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01" />
      </svg>
    ),
  },
  {
    name: 'Laundry',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="2" width="18" height="20" rx="2" />
        <circle cx="12" cy="13" r="5" />
        <circle cx="12" cy="13" r="2" />
        <line x1="7" y1="6" x2="7" y2="6" />
        <line x1="10" y1="6" x2="10" y2="6" />
      </svg>
    ),
  },
  {
    name: 'Pet Friendly',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="4" r="2" /><circle cx="18" cy="8" r="2" />
        <circle cx="4" cy="8" r="2" /><circle cx="8" cy="4" r="2" />
        <path d="M8 14c-1.5 2-2 4-1 6 1.5 2.5 5.5 2.5 8 1 2-1.5 3-4 1-6-1.5-1.5-3-2-4-2s-2.5.5-4 2z" />
      </svg>
    ),
  },
  {
    name: 'Concierge',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20H6V10l6-6 6 6v10z" /><path d="M9 20v-6h6v6" />
      </svg>
    ),
  },
  {
    name: 'Rooftop Garden',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    ),
  },
];

export default function Amenities() {
  const sectionRef = useScrollReveal();

  return (
    <section className="amenities" ref={sectionRef} aria-label="Amenities">
      <div className="container">
        <div className="amenities-header" data-reveal>
          <span className="eyebrow">Exclusive Amenities</span>
          <h2 className="section-title">A Life Beyond Ordinary</h2>
          <p className="section-subtitle">
            Every detail curated to elevate your everyday experience.
          </p>
        </div>

        <div className="amenities-grid" data-reveal="scale-up">
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
