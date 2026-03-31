import { useEffect, useRef } from 'react';
import './ProjectDetails.css';

const details = [
    { label: 'Property Type', value: 'Residential Real Estate' },
    { label: 'Total Base Area', value: '4.5 Kanals' },
    { label: 'Building Structure', value: 'Ground + 12 Floors' },
    { label: 'Total Units', value: '120+ Apartments' },
    { label: 'Expected Completion', value: 'Q4 2027' },
    { label: 'Current Status', value: 'Active Development' },
    { label: 'Maintenance Model', value: 'Pro-Managed' },
    { label: 'Amenities Suite', value: 'Exclusive Club' },
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
            { threshold: 0.15 }
        );

        const animEls = sectionRef.current?.querySelectorAll('.pd-animate');
        animEls?.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section className="project-details" id="project-details" ref={sectionRef}>
            <div className="container">
                <div className="pd-header pd-animate">
                    <span className="pd-eyebrow">Project Specifications</span>
                    <h2 className="section-title">The Blueprint of Luxury</h2>
                    <p className="section-subtitle">
                        Every aspect of Premio Homes has been meticulously planned to offer an unparalleled lifestyle of comfort, security, and elegance.
                    </p>
                </div>
                
                <div className="pd-grid">
                    {details.map((item, index) => (
                        <div 
                            className="pd-card pd-animate" 
                            key={item.label}
                            style={{ transitionDelay: `${index * 0.05}s` }}
                        >
                            <h4 className="pd-label">{item.label}</h4>
                            <p className="pd-value">{item.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
