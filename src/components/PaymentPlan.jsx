import { useEffect, useRef, useState } from 'react';
import './PaymentPlan.css';

const planTiers = [
    {
        title: "Down Payment",
        percentage: "30%",
        amount: "PKR ~3.75M",
        description: "Secure your unit and initiate the journey to owning your dream home.",
        highlight: false,
    },
    {
        title: "Monthly Installments",
        percentage: "50%",
        amount: "36 Months",
        description: "Flexible and manageable monthly payments structured over 3 years.",
        highlight: true,
    },
    {
        title: "On Possession",
        percentage: "20%",
        amount: "PKR ~2.5M",
        description: "Final payment due only upon the successful handover of the property keys.",
        highlight: false,
    }
];

export default function PaymentPlan() {
    const sectionRef = useRef(null);
    const [tooltipId, setTooltipId] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('pp-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        const animEls = sectionRef.current?.querySelectorAll('.pp-animate');
        animEls?.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section className="payment-plan" id="payment-plan" ref={sectionRef}>
            <div className="container">
                <div className="pp-header pp-animate">
                    <span className="pp-eyebrow">Financial Structure</span>
                    <h2 className="section-title">Investment & Payment Plan</h2>
                    <p className="section-subtitle">
                        We offer a highly flexible and transparent payment plan designed to suit your financial convenience without compromising on your dream lifestyle.
                    </p>
                </div>
                
                <div className="pp-cards-wrapper">
                    {planTiers.map((tier, index) => (
                        <div 
                            key={index}
                            className={`pp-card pp-animate ${tier.highlight ? 'pp-card-highlight' : ''}`}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                            onMouseEnter={() => setTooltipId(index)}
                            onMouseLeave={() => setTooltipId(null)}
                        >
                            <div className="pp-card-badge">{tier.percentage}</div>
                            <h3 className="pp-card-title">{tier.title}</h3>
                            <div className="pp-card-amount">{tier.amount}</div>
                            <p className="pp-card-desc">{tier.description}</p>
                            <ul className="pp-card-features">
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Transparent Tracking
                                </li>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    No Hidden Fees
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="pp-footer pp-animate" style={{ transitionDelay: '0.4s' }}>
                    <p>Prices are base estimates and subject to variation based on floor plan sizes.</p>
                    <a href="#schedule-tour" className="btn-primary">Request Detailed Quote</a>
                </div>
            </div>
        </section>
    );
}
