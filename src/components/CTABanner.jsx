import useScrollReveal from '../hooks/useScrollReveal';
import './CTABanner.css';

export default function CTABanner() {
    const ref = useScrollReveal();

    return (
        <section className="cta-banner" ref={ref}>
            <div className="cta-banner-bg"></div>
            <div className="container cta-banner-content" data-reveal>
                <h2 className="cta-banner-title">Ready to Invest in Your Future?</h2>
                <p className="cta-banner-desc">
                    Discover premium properties in prime locations across Lahore.
                    Flexible payment plans, transparent dealings, and world-class amenities await you.
                </p>
                <div className="cta-banner-actions">
                    <a href="#contact" className="btn-primary">Schedule a Tour</a>
                    <a href="tel:923225558812" className="cta-banner-phone">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        Call Us Now
                    </a>
                </div>
            </div>
        </section>
    );
}
