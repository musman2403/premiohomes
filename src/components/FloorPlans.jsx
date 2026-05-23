import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import studioImg from '../assets/images/studio.webp';
import twoBedImg from '../assets/images/two-bed.webp';
import threeBedImg from '../assets/images/three-bed.webp';
import './FloorPlans.css';

const plans = [
  {
    title: 'Studio & One Bedroom',
    desc: 'Intelligently designed compact residences, perfect for professionals and couples seeking modern comfort in a prime location.',
    img: studioImg,
    label: 'Residence Type 01',
  },
  {
    title: 'Two Bedrooms',
    desc: 'Spacious family homes with generous layouts and quality construction built for lasting value.',
    img: twoBedImg,
    label: 'Residence Type 02',
  },
  {
    title: 'Three Bedrooms',
    desc: 'Premium residences with ample space and professional planning for a superior living experience.',
    img: threeBedImg,
    label: 'Residence Type 03',
  },
];

export default function FloorPlans() {
  const sectionRef = useScrollReveal();

  return (
    <section className="floorplans-section" id="floorplans" aria-label="Our Residences" ref={sectionRef}>
      {/* Section Header */}
      <div className="floorplans-header">
        <div className="floorplans-header-inner" data-reveal>
          <div className="floorplans-title-group">
            <span className="eyebrow">Our Residences</span>
            <h2 className="section-title">Curated Living Spaces</h2>
          </div>
          <p className="floorplans-desc">
            Each residence is meticulously designed to balance
            elegance, functionality, and enduring value.
          </p>
        </div>
      </div>

      {/* Asymmetric image grid */}
      <div className="floorplans-grid">
        {plans.map((plan, i) => (
          <div className="floorplan-card" key={plan.title}>
            <div
              className="floorplan-card-bg"
              style={{ backgroundImage: `url(${plan.img})` }}
              aria-hidden="true"
            />
            <div className="floorplan-card-overlay" aria-hidden="true" />
            <div className="floorplan-card-content">
              <span className="floorplan-card-eyebrow">{plan.label}</span>
              <h3 className="floorplan-card-title">{plan.title}</h3>
              <p className="floorplan-card-desc">{plan.desc}</p>
              <Link
                to="/contact"
                className="floorplan-card-link"
              >
                Enquire
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
