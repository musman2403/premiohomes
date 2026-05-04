import { useEffect, useRef } from 'react';
import './PageHero.css';

/**
 * Cinematic page hero with 3D parallax, text reveal, and scroll depth.
 */
export default function PageHero({ title, subtitle, backgroundImage }) {
    const heroRef = useRef(null);
    const bgRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const vh = window.innerHeight;

            if (bgRef.current) {
                // 3D depth: background scales slightly and moves in Z
                const scale = 1 + scrollY * 0.0003;
                const translateY = scrollY * 0.4;
                bgRef.current.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
            }
            if (textRef.current) {
                const opacity = Math.max(0, 1 - scrollY / (vh * 0.4));
                const translateY = scrollY * 0.2;
                const translateZ = scrollY * -0.5;
                textRef.current.style.opacity = opacity;
                textRef.current.style.transform = `translate3d(0, ${translateY}px, ${translateZ}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="page-hero" ref={heroRef}>
            <div className="page-hero-bg" ref={bgRef}>
                {backgroundImage && (
                    <img src={backgroundImage} alt="" className="page-hero-img" />
                )}
            </div>
            <div className="page-hero-overlay"></div>
            <div className="page-hero-content" ref={textRef}>
                <span className="page-hero-line"></span>
                <h1 className="page-hero-title">{title}</h1>
                {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
            </div>
            <div className="page-hero-scroll-indicator">
                <div className="page-hero-scroll-line"></div>
                <span>Scroll</span>
            </div>
        </div>
    );
}
