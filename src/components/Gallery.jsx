import { useEffect, useRef } from 'react';
import view1Img from '../assets/images/view1.webp';
import view2Img from '../assets/images/view2.webp';
import view3Img from '../assets/images/view3.webp';
import view4Img from '../assets/images/view4.webp';
import './Gallery.css';

const images = [
    { src: view1Img, alt: 'Premio Homes View 1' },
    { src: view2Img, alt: 'Premio Homes View 2' },
    { src: view3Img, alt: 'Premio Homes View 3' },
    { src: view4Img, alt: 'Premio Homes View 4' },
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
                            <img src={img.src} alt={img.alt} width="800" height="600" loading="lazy" decoding="async" />
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
