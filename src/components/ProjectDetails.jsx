import { useEffect, useRef } from 'react';
import './ProjectDetails.css';

const details = [
  { label: 'Property Type',      value: 'Residential Real Estate' },
  { label: 'Total Base Area',    value: '4.5 Kanals' },
  { label: 'Building Structure', value: 'Ground + 12 Floors' },
  { label: 'Total Units',        value: '120+ Apartments' },
  { label: 'Expected Completion', value: 'Q4 2027' },
  { label: 'Current Status',     value: 'Active Development' },
  { label: 'Maintenance Model',  value: 'Pro-Managed' },
  { label: 'Amenities Suite',    value: 'Exclusive Club' },
];

export default function ProjectDetails() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('pd-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const animEls = sectionRef.current?.querySelectorAll('.pd-card');
    animEls?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="project-details" id="project-details" ref={sectionRef} aria-label="Project Specifications">
      <div className="container">
        <div className="pd-layout">
          {/* Left: header */}
          <div className="pd-header" data-reveal>
            <span className="pd-eyebrow">Project Specifications</span>
            <h2 className="section-title">The Blueprint of Luxury</h2>
            <div className="luxury-divider" />
            <p className="pd-body">
              Every aspect of Premio Homes has been meticulously planned to deliver
              an unparalleled lifestyle of comfort, security, and enduring elegance.
              Built to the highest standards of modern construction.
            </p>
          </div>

          {/* Right: spec grid */}
          <div className="pd-grid" data-reveal="slide-right">
            {details.map((item, index) => (
              <div
                className="pd-card"
                key={item.label}
                style={{ transitionDelay: `${index * 0.06}s` }}
              >
                <h4 className="pd-label">{item.label}</h4>
                <p className="pd-value">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
