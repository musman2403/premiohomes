import './Hero.css';

export default function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-video-wrap">
                <iframe
                    className="hero-video"
                    src="https://www.youtube.com/embed/rutCVOOj4KQ?autoplay=1&mute=1&loop=1&playlist=rutCVOOj4KQ&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1&iv_load_policy=3"
                    title="Property Showcase"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1 className="hero-title">The Nook</h1>
                <p className="hero-subtitle">
                    The Nook is a home buyers dream. It&apos;s a condo in the nature, with beautiful views,
                    lots of trees and plants, and a few big rocks here and there.
                </p>
                <a href="#contact" className="btn-primary">Schedule a Tour</a>
            </div>
            <div className="hero-scroll" onClick={() => document.getElementById('floorplans')?.scrollIntoView({ behavior: 'smooth' })}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </div>
        </section>
    );
}
