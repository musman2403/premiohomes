import useScrollReveal from '../hooks/useScrollReveal';
import './ScheduleTour.css';

export default function ScheduleTour() {
    const sectionRef = useScrollReveal();

    return (
        <section className="contact section cinema-section" id="contact" ref={sectionRef}>
            <div className="container">
                <div className="contact-wrapper">
                    {/* Left: Info */}
                    <div className="contact-info" data-cinema="tilt-left">
                        <span className="contact-eyebrow">Get in Touch</span>
                        <h2>Connect with Primeo Homes</h2>
                        <p className="contact-info-desc">
                            We believe in building homes with transparency — not just making promises.
                            Get in touch to learn more about our development projects and professional
                            real estate services in Lahore.
                        </p>
                        <div className="contact-details">
                            <div className="contact-detail">
                                <div className="contact-detail-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                </div>
                                <div>
                                    <strong>Phone</strong>
                                    <a href="tel:923225558812">+92 322 555 8812</a>
                                </div>
                            </div>
                            <div className="contact-detail">
                                <div className="contact-detail-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                </div>
                                <div>
                                    <strong>Email</strong>
                                    <a href="mailto:info@premiohomes.pk">info@premiohomes.pk</a>
                                </div>
                            </div>
                            <div className="contact-detail">
                                <div className="contact-detail-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <div>
                                    <strong>Office</strong>
                                    <span>Lahore, Punjab, Pakistan</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div data-cinema="tilt-right" data-cinema-delay="2">
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-row">
                                <input type="text" placeholder="First Name" />
                                <input type="text" placeholder="Last name" />
                            </div>
                            <input type="email" placeholder="Email" />
                            <input type="tel" placeholder="Phone Number" />
                            <select className="contact-select">
                                <option value="">I'm interested in...</option>
                                <option value="studio">Studio Apartment</option>
                                <option value="2bed">Two Bedroom</option>
                                <option value="3bed">Three Bedroom</option>
                                <option value="investment">Investment Opportunity</option>
                            </select>
                            <textarea placeholder="Your Message"></textarea>
                            <button type="submit" className="btn-submit">Schedule a Tour</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
