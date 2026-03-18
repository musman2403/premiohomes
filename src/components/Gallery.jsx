import { useEffect, useRef } from 'react';
import heroImg from '../assets/images/hero.webp';
import studioImg from '../assets/images/studio.webp';
import twoBedImg from '../assets/images/two-bed.webp';
import threeBedImg from '../assets/images/three-bed.webp';
import kitchenImg from '../assets/images/kitchen.webp';
import bedroomImg from '../assets/images/bedroom.webp';
import bathroomImg from '../assets/images/bathroom.webp';
import './Gallery.css';

const images = [
    { src: heroImg, alt: 'Luxury living room' },
    { src: kitchenImg, alt: 'Modern kitchen' },
    { src: bedroomImg, alt: 'Elegant bedroom' },
    { src: bathroomImg, alt: 'Spa-like bathroom' },
    { src: studioImg, alt: 'Studio apartment' },
    { src: twoBedImg, alt: 'Two bedroom view' },
    { src: threeBedImg, alt: 'Three bedroom space' },
];

export default function Gallery() {
    const gridRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const items = gridRef.current.querySelectorAll('.gallery-item');
                    items.forEach((item, i) => {
                        setTimeout(() => item.classList.add('visible'), i * 120);
                    });
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );
        if (gridRef.current) observer.observe(gridRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="gallery" id="gallery">
            <div className="container">
                <h2 className="section-title">Gallery</h2>
                <div className="gallery-grid" ref={gridRef}>
                    {images.map((img, i) => (
                        <div className="gallery-item" key={i}>
                            <img src={img.src} alt={img.alt} width="800" height="600" />
                            <div className="gallery-overlay">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8" />
                                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                    <line x1="11" y1="8" x2="11" y2="14" />
                                    <line x1="8" y1="11" x2="14" y2="11" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
