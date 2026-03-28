import posterImg from '../assets/images/hero.webp';
import './Hero.css';

export default function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-video-wrap">
                <video
                    className="hero-video"
                    src="/hero.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={posterImg}
                />
            </div>
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1 className="hero-title">Primeo Homes</h1>
                <p className="hero-subtitle">
                    Building real homes with clarity, commitment, and trust. 
                    Based in Lahore, we deliver quality development and transparent real estate solutions.
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
