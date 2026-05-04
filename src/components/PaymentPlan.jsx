import { useEffect, useRef, useState } from 'react';
import './PaymentPlan.css';

const planTiers = [
    {
        title: "Initial Booking",
        amount: "PKR 1,295,000",
        details: [
            { label: "Down Payment", value: "1,295,000" },
            { label: "Confirmation", value: "1,295,000" }
        ],
        description: "Secure your 3 Marla unit today and start your journey towards luxury living.",
        highlight: false,
    },
    {
        title: "Flexible Installments",
        amount: "PKR 59,000",
        details: [
            { label: "Monthly (42 Months)", value: "59,000" },
            { label: "Bi-Annual (Every 6 Months)", value: "495,000" }
        ],
        description: "Easy and manageable monthly and bi-annual installments spread over 3.5 years.",
        highlight: true,
    },
    {
        title: "Ownership & Value",
        amount: "PKR 1,967,000",
        details: [
            { label: "On Possession", value: "1,967,000" },
            { label: "Total Project Value", value: "10,500,000" }
        ],
        description: "The final step to owning your premium home in New Lahore City.",
        highlight: false,
    }
];

export default function PaymentPlan() {
    const sectionRef = useRef(null);

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
                    <span className="pp-eyebrow">Investment Plan</span>
                    <h2 className="section-title">3 Marla Payment Structure</h2>
                    <p className="section-subtitle">
                        A highly flexible 3.5-year payment plan designed for your convenience in Premio Homes, New Lahore City.
                    </p>
                </div>
                
                <div className="pp-cards-wrapper">
                    {planTiers.map((tier, index) => (
                        <div 
                            key={index}
                            className={`pp-card pp-animate ${tier.highlight ? 'pp-card-highlight' : ''}`}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            <div className="pp-card-badge">{tier.highlight ? '3.5 Years' : 'Step ' + (index + 1)}</div>
                            <h3 className="pp-card-title">{tier.title}</h3>
                            <div className="pp-card-amount">{tier.amount}</div>
                            
                            <div className="pp-card-breakdown">
                                {tier.details.map((item, i) => (
                                    <div key={i} className="pp-breakdown-item">
                                        <span className="item-label">{item.label}</span>
                                        <span className="item-value">PKR {item.value}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="pp-card-desc">{tier.description}</p>
                            
                            <ul className="pp-card-features">
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    24/7 Security & A+ Construction
                                </li>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Prime Location in Lahore
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="pp-footer pp-animate" style={{ transitionDelay: '0.4s' }}>
                    <p>Total project price: PKR 10,500,000. Possession within 3.5 years.</p>
                    <a href="#schedule-tour" className="btn-primary">Download Full Schedule</a>
                </div>
            </div>
        </section>
    );
}
