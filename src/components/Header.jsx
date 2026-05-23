import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logoImg from '../assets/images/logo.webp';
import apartments from '../data/apartments';
import './Header.css';

export default function Header({ favorites = [] }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const favoriteApartments = apartments.filter((apt) => favorites.includes(apt.title));

  return (
    <header
      className={`header ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}
      id="header"
    >
      {/* Logo */}
      <div className="header-logo">
        <Link to="/" onClick={closeMenu}>
          <img src={logoImg} alt="Premio Homes" className="logo-img" width="140" height="38" />
        </Link>
      </div>

      {/* Nav */}
      <nav className={`header-nav ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
        <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
        <NavLink to="/about" onClick={closeMenu}>About</NavLink>
        <NavLink to="/gallery" onClick={closeMenu}>Gallery</NavLink>
        <NavLink to="/pricing" onClick={closeMenu}>Residences</NavLink>
        <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
      </nav>

      {/* Actions */}
      <div className="header-actions">
        {/* Book a Viewing CTA */}
        <button
          className="header-cta"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Book a Viewing
        </button>

        {/* Favorites */}
        <div className="profile-wrapper">
          <button className="header-icon" aria-label="Saved properties">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            {favorites.length > 0 && (
              <span className="favorites-badge">{favorites.length}</span>
            )}
          </button>
          <div className="favorites-dropdown">
            <div className="favorites-dropdown-header">
              Saved Properties
            </div>
            {favoriteApartments.length === 0 ? (
              <div className="favorites-empty">
                No properties saved yet.<br />Tap the heart icon to save one.
              </div>
            ) : (
              <ul className="favorites-list">
                {favoriteApartments.map((apt) => (
                  <li key={apt.id} className="favorites-item">
                    <img src={apt.img} alt={apt.title} className="favorites-item-img" />
                    <div className="favorites-item-info">
                      <span className="favorites-item-title">{apt.title}</span>
                      <span className="favorites-item-meta">
                        {apt.beds} Bed · {apt.baths} Bath · {apt.sqft} Sq Ft
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Mobile toggle */}
        <div
          className={`mobile-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          role="button"
          tabIndex={0}
        >
          <span />
          <span />
          <span />
        </div>
      </div>

      {menuOpen && <div className="header-overlay" onClick={closeMenu} aria-hidden="true" />}
    </header>
  );
}
