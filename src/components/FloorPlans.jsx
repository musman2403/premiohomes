import useScrollReveal from '../hooks/useScrollReveal';
import studioImg from '../assets/images/studio.webp';
import twoBedImg from '../assets/images/two-bed.webp';
import threeBedImg from '../assets/images/three-bed.webp';
import './FloorPlans.css';

const plans = [
    {
        title: 'Studio, One Bedroom',
        desc: 'Carefully planned living spaces in prime locations, designed for modern comfort and efficiency.',
        price: 'Contact for Pricing',
        img: studioImg,
    },
    {
        title: 'Two Bedrooms',
        desc: 'Spacious family homes built with quality construction and a focus on long-term value.',
        price: 'Contact for Pricing',
        img: twoBedImg,
    },
    {
        title: 'Three Bedrooms',
        desc: 'Premium residences offering ample space and professional planning for a superior living experience.',
        price: 'Contact for Pricing',
        img: threeBedImg,
    },
];

export default function FloorPlans() {
    const sectionRef = useScrollReveal();

    return (
        <section className="floorplans-full" id="floorplans" ref={sectionRef}>
            <div className="floorplans-grid">
                {plans.map((plan, i) => (
                    <div
                        className="floorplan-card"
                        key={plan.title}
                        data-reveal={i === 0 ? 'slide-left' : i === 2 ? 'slide-right' : 'slide-up'}
                        style={{ transitionDelay: `${i * 0.15}s` }}
                    >
                        <div className="floorplan-card-bg" style={{ backgroundImage: `url(${plan.img})` }}></div>
                        <div className="floorplan-card-content">
                            <div className="floorplan-card-content-inner">
                                <h3 className="floorplan-card-title">{plan.title}</h3>
                                <p className="floorplan-card-desc">{plan.desc}</p>
                                <span className="floorplan-card-price">Starting at {plan.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
