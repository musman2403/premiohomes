import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import posterImg from '../assets/images/hero.webp';
import AnimatedText from './AnimatedText';
import MagneticButton from './MagneticButton';
import LiquidBlobs from './LiquidBlobs';
import Faux3DCard from './Faux3DCard';
import ErrorBoundary from './ErrorBoundary';
import './Hero.css';

export default function Hero() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: sectionRef,
      offset: ["start start", "end start"]
    });

    // Scrollytelling Parallax
    const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const videoY = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section className="hero" id="home" ref={sectionRef}>
            <LiquidBlobs />
            <div className="hero-video-wrap">
                <motion.video
                    className="hero-video"
                    src="/hero.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={posterImg}
                    preload="none"
                    style={{ y: videoY }}
                />
            </div>
            
            <div className="hero-overlay" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(18,18,38,0.8) 100%)' }}></div>
            
            <motion.div className="hero-content" style={{ y, opacity }}>
                <span className="hero-eyebrow">Welcome to</span>
                
                <AnimatedText text="Primeo Homes" el="h1" className="hero-title" />
                
                <Faux3DCard className="hero-faux-card">
                  <p className="hero-subtitle glassmorphic-panel">
                      Stop Paying Rent. Own a 5 Marla Home in New Lahore City.
                      <br/>
                      <span style={{ fontSize: '0.85em', opacity: 0.8 }}>A+ Construction • Modern Design • Family-Friendly Community</span>
                  </p>
                </Faux3DCard>
                
                <div className="hero-buttons">
                    <MagneticButton className="btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                        Book Your Home Now
                    </MagneticButton>
                    <MagneticButton className="btn-secondary-hero" onClick={() => window.open('https://wa.me/923225558812', '_blank')}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        WhatsApp
                    </MagneticButton>
                </div>
            </motion.div>
            
            <div className="hero-scroll" onClick={() => document.getElementById('floorplans')?.scrollIntoView({ behavior: 'smooth' })}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </div>
        </section>
    );
}
