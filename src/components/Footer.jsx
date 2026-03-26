import { useState, useEffect } from 'react';
import logoImg from '../assets/images/logo.webp';
import './Footer.css';

export default function Footer() {
    const [showTop, setShowTop] = useState(false);

    useEffect(() => {
        const onScroll = () => setShowTop(window.scrollY > 400);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <>
            <footer className="footer">
                <div className="container footer-content">
                    <img src={logoImg} alt="Premio Homes" className="footer-logo" width="100" height="33" />
                    <p className="footer-text">&copy; {new Date().getFullYear()} Premio Homes — All rights reserved.</p>
                </div>
            </footer>
            <button
                className={`back-to-top ${showTop ? 'visible' : ''}`}
                onClick={scrollToTop}
                aria-label="Back to top"
            >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="18 15 12 9 6 15" />
                </svg>
            </button>
        </>
    );
}
