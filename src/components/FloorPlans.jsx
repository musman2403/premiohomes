import studioImg from '../assets/images/studio.webp';
import twoBedImg from '../assets/images/two-bed.webp';
import threeBedImg from '../assets/images/three-bed.webp';
import './FloorPlans.css';

const plans = [
    {
        title: 'Studio, One Bedroom',
        desc: 'The Nook is a condo in the nature. The views, plants and rocks make it a dream for any homebuyer.',
        price: '$190,000',
        img: studioImg,
    },
    {
        title: 'Two Bedrooms',
        desc: 'The Nook is a great place to buy a home. It has beautiful views, lots of trees and plants, and big rocks here and there.',
        price: '$290,000',
        img: twoBedImg,
    },
    {
        title: 'Three Bedrooms',
        desc: "It's a condo in the forest, with beautiful views, lots of trees and vegetation, and a few big rocks here and there.",
        price: '$390,000',
        img: threeBedImg,
    },
];

export default function FloorPlans() {
    return (
        <section className="floorplans" id="floorplans">
            <div className="floorplans-grid">
                {plans.map((plan) => (
                    <div className="floorplan-card" key={plan.title}>
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
