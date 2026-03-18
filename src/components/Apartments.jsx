import { useEffect, useRef, useState } from 'react';
import apartments from '../data/apartments';
import './Apartments.css';

export default function Apartments({ isFavorite, toggleFavorite }) {
    const gridRef = useRef(null);
    const [selectedApt, setSelectedApt] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const cards = gridRef.current.querySelectorAll('.apartment-card');
                    cards.forEach((card, i) => {
                        setTimeout(() => card.classList.add('visible'), i * 200);
                    });
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        if (gridRef.current) observer.observe(gridRef.current);
        return () => observer.disconnect();
    }, []);

    // Lock body scroll when modal open
    useEffect(() => {
        if (selectedApt) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [selectedApt]);

    return (
        <section className="apartments section">
            <div className="container">
                <h2 className="section-title">The Nook Apartments</h2>
                <div className="apartments-grid" ref={gridRef}>
                    {apartments.map((apt) => (
                        <div className={`apartment-card ${apt.slide}`} key={apt.id} onClick={() => setSelectedApt(apt)}>
                            <div className="apartment-card-img">
                                <img src={apt.img} alt={apt.title} width="600" height="400" loading="lazy" decoding="async" />
                                <span className="apartment-badge">For Sale</span>
                                <button
                                    className={`favorite-btn ${isFavorite(apt.title) ? 'active' : ''}`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleFavorite(apt.title);
                                    }}
                                    aria-label={isFavorite(apt.title) ? 'Remove from favorites' : 'Add to favorites'}
                                >
                                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill={isFavorite(apt.title) ? 'currentColor' : 'none'}>
                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="apartment-card-body">
                                <h3 className="apartment-card-title">{apt.title}</h3>
                                <div className="apartment-card-meta">
                                    <span>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7" /><path d="M2 10h20" /><path d="M7 14h0" /></svg>
                                        {apt.beds === 1 ? 'Bed' : 'Beds'}: {apt.beds}
                                    </span>
                                    <span>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h16v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-5z" /><path d="M6 12V5a2 2 0 0 1 2-2h3v4" /></svg>
                                        {apt.baths === 1 ? 'Bath' : 'Baths'}: {apt.baths}
                                    </span>
                                    <span>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 3v18" /></svg>
                                        {apt.sqft} Sq Ft
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Apartment Detail Modal */}
            {selectedApt && (
                <div className="apt-modal-overlay" onClick={() => setSelectedApt(null)}>
                    <div className="apt-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="apt-modal-close" onClick={() => setSelectedApt(null)} aria-label="Close">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                        <div className="apt-modal-image">
                            <img src={selectedApt.img} alt={selectedApt.title} width="800" height="500" />
                            <span className="apartment-badge">For Sale</span>
                            <span className="apt-modal-price">{selectedApt.price}</span>
                        </div>
                        <div className="apt-modal-content">
                            <div className="apt-modal-header">
                                <h2 className="apt-modal-title">{selectedApt.title}</h2>
                                <span className={`apt-modal-avail ${selectedApt.available === 'Available Now' ? 'now' : ''}`}>
                                    {selectedApt.available}
                                </span>
                            </div>
                            <div className="apt-modal-stats">
                                <div className="apt-modal-stat">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7" /><path d="M2 10h20" /><path d="M7 14h0" /></svg>
                                    <strong>{selectedApt.beds}</strong> {selectedApt.beds === 1 ? 'Bedroom' : 'Bedrooms'}
                                </div>
                                <div className="apt-modal-stat">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h16v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-5z" /><path d="M6 12V5a2 2 0 0 1 2-2h3v4" /></svg>
                                    <strong>{selectedApt.baths}</strong> {selectedApt.baths === 1 ? 'Bathroom' : 'Bathrooms'}
                                </div>
                                <div className="apt-modal-stat">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 3v18" /></svg>
                                    <strong>{selectedApt.sqft}</strong> Sq Ft
                                </div>
                            </div>
                            <p className="apt-modal-desc">{selectedApt.description}</p>
                            <div className="apt-modal-features">
                                <h4>Features & Amenities</h4>
                                <ul>
                                    {selectedApt.features.map((f) => (
                                        <li key={f}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary, #2e7d6f)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="apt-modal-actions">
                                <a href="#contact" className="apt-modal-btn primary" onClick={() => setSelectedApt(null)}>Schedule a Tour</a>
                                <button
                                    className={`apt-modal-btn secondary ${isFavorite(selectedApt.title) ? 'favorited' : ''}`}
                                    onClick={() => toggleFavorite(selectedApt.title)}
                                >
                                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill={isFavorite(selectedApt.title) ? 'currentColor' : 'none'}>
                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                    </svg>
                                    {isFavorite(selectedApt.title) ? 'Saved' : 'Save to Favorites'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
