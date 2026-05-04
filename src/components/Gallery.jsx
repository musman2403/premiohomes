import { useState, useEffect, useRef, useCallback } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import view1Img from '../assets/images/view1.webp';
import view2Img from '../assets/images/view2.webp';
import view3Img from '../assets/images/view3.webp';
import view4Img from '../assets/images/view4.webp';
import heroImg from '../assets/images/hero.webp';
import natureImg from '../assets/images/nature.webp';
import kitchenImg from '../assets/images/kitchen.webp';
import bathroomImg from '../assets/images/bathroom.webp';
import bedroomImg from '../assets/images/bedroom.webp';
import studioImg from '../assets/images/studio.webp';
import familyImg from '../assets/images/family.webp';
import './Gallery.css';

const categories = ['All', 'Exterior', 'Interior', 'Lifestyle'];

const images = [
    { src: view1Img, alt: 'Building Exterior View 1', category: 'Exterior' },
    { src: kitchenImg, alt: 'Modern Kitchen Design', category: 'Interior' },
    { src: view2Img, alt: 'Building Exterior View 2', category: 'Exterior' },
    { src: bedroomImg, alt: 'Master Bedroom', category: 'Interior' },
    { src: familyImg, alt: 'Family Community Living', category: 'Lifestyle' },
    { src: view3Img, alt: 'Building Exterior View 3', category: 'Exterior' },
    { src: studioImg, alt: 'Studio Apartment', category: 'Interior' },
    { src: natureImg, alt: 'Green Surroundings', category: 'Lifestyle' },
    { src: view4Img, alt: 'Building Exterior View 4', category: 'Exterior' },
    { src: bathroomImg, alt: 'Modern Bathroom', category: 'Interior' },
    { src: heroImg, alt: 'Premio Homes Overview', category: 'Exterior' },
];

export default function Gallery() {
    const sectionRef = useScrollReveal();
    const [activeFilter, setActiveFilter] = useState('All');
    const [lightbox, setLightbox] = useState(null);
    const lightboxRef = useRef(null);

    const filtered = activeFilter === 'All'
        ? images
        : images.filter((img) => img.category === activeFilter);

    const openLightbox = useCallback((index) => {
        setLightbox(index);
    }, []);

    const closeLightbox = useCallback(() => {
        setLightbox(null);
    }, []);

    const nextImage = useCallback(() => {
        setLightbox((prev) => (prev + 1) % filtered.length);
    }, [filtered.length]);

    const prevImage = useCallback(() => {
        setLightbox((prev) => (prev - 1 + filtered.length) % filtered.length);
    }, [filtered.length]);

    // Keyboard navigation for lightbox
    useEffect(() => {
        if (lightbox === null) return;
        const handleKey = (e) => {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [lightbox, closeLightbox, nextImage, prevImage]);

    return (
        <section className="gallery cinema-section" id="gallery" ref={sectionRef}>
            <div className="container">
                {/* Filter tabs */}
                <div className="gallery-filters" data-cinema="rise">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`gallery-filter ${activeFilter === cat ? 'active' : ''}`}
                            onClick={() => setActiveFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="gallery-grid">
                    {filtered.map((img, i) => (
                        <div
                            className="gallery-item"
                            key={`${img.alt}-${i}`}
                            data-cinema="zoom"
                            data-cinema-delay={Math.min(i + 1, 6)}
                            onClick={() => openLightbox(i)}
                        >
                            <img src={img.src} alt={img.alt} width="800" height="600" loading="lazy" decoding="async" />
                            <div className="gallery-overlay">
                                <span className="gallery-overlay-category">{img.category}</span>
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

            {/* Lightbox */}
            {lightbox !== null && (
                <div className="gallery-lightbox" ref={lightboxRef} onClick={closeLightbox}>
                    <div className="gallery-lightbox-inner" onClick={(e) => e.stopPropagation()}>
                        <button className="gallery-lightbox-close" onClick={closeLightbox} aria-label="Close">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                        <button className="gallery-lightbox-arrow gallery-lightbox-prev" onClick={prevImage} aria-label="Previous">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="15 18 9 12 15 6" />
                            </svg>
                        </button>
                        <img src={filtered[lightbox].src} alt={filtered[lightbox].alt} className="gallery-lightbox-img" />
                        <button className="gallery-lightbox-arrow gallery-lightbox-next" onClick={nextImage} aria-label="Next">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </button>
                        <div className="gallery-lightbox-counter">
                            {lightbox + 1} / {filtered.length}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
