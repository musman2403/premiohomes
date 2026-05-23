import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import posterImg from '../assets/images/hero.webp';
import './Hero.css';

export default function Hero() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const videoY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.45], [0, -60]);

  const scrollToFloorPlans = () =>
    document.getElementById('floorplans')?.scrollIntoView({ behavior: 'smooth' });

  const scrollToContact = () => navigate('/contact');

  return (
    <section className="hero" id="home" ref={sectionRef} aria-label="Hero">
      {/* Parallax video background */}
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
          aria-hidden="true"
        />
      </div>

      {/* Cinematic warm overlay */}
      <div className="hero-overlay" aria-hidden="true" />

      {/* Content — left-aligned, editorial */}
      <motion.div
        className="hero-content"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        {/* Eyebrow */}
        <span className="hero-eyebrow">New Lahore City · Phase 3</span>

        {/* Main headline — editorial serif */}
        <h1 className="hero-title">
          Where Architecture<br />Meets <em>Ambition</em>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          Premium residences crafted for those who expect the finest.
          5 Marla homes with world-class amenities in a thriving community.
        </p>

        {/* CTAs */}
        <div className="hero-buttons">
          <button className="hero-btn-primary" onClick={scrollToContact}>
            Book a Private Viewing
          </button>
          <button className="hero-btn-secondary" onClick={scrollToFloorPlans}>
            Explore the Project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </motion.div>

      {/* Stats bar — bottom right */}
      <div className="hero-stats" aria-hidden="true">
        <div className="hero-stat">
          <span className="hero-stat-number">10+</span>
          <span className="hero-stat-label">Years Experience</span>
        </div>
        <div className="hero-stat">
          <span className="hero-stat-number">120+</span>
          <span className="hero-stat-label">Residences</span>
        </div>
        <div className="hero-stat">
          <span className="hero-stat-number">G+12</span>
          <span className="hero-stat-label">Floors</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator" onClick={scrollToFloorPlans} aria-label="Scroll down">
        <div className="hero-scroll-line" />
        <span className="hero-scroll-text">Scroll</span>
      </div>
    </section>
  );
}
