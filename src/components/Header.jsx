import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logoImg from '../assets/images/logo.webp';
import apartments from '../data/apartments';
import './Header.css';

export default function Header({ favorites = [] }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const favoriteApartments = apartments.filter((apt) => favorites.includes(apt.title));

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`} id="header">
      <div className="header-logo">
        <Link to="/">
          <img src={logoImg} alt="Premio Homes" className="logo-img" width="120" height="40" />
        </Link>
      </div>
      <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
        <NavLink to="/about" onClick={closeMenu}>About Us</NavLink>
        <NavLink to="/gallery" onClick={closeMenu}>Gallery</NavLink>
        <NavLink to="/contact" onClick={closeMenu}>Contact Us</NavLink>
      </nav>
      <div className="header-actions">
        <div className="profile-wrapper">
          <button className="header-icon" aria-label="User account">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            {favorites.length > 0 && <span className="favorites-badge">{favorites.length}</span>}
          </button>
          <div className="favorites-dropdown">
            <div className="favorites-dropdown-header">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--color-primary, #c8102e)" stroke="var(--color-primary, #c8102e)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              Favorites
            </div>
            {favoriteApartments.length === 0 ? (
              <div className="favorites-empty">No favorites yet. Click the heart icon on a property to save it.</div>
            ) : (
              <ul className="favorites-list">
                {favoriteApartments.map((apt) => (
                  <li key={apt.id} className="favorites-item">
                    <img src={apt.img} alt={apt.title} className="favorites-item-img" />
                    <div className="favorites-item-info">
                      <span className="favorites-item-title">{apt.title}</span>
                      <span className="favorites-item-meta">{apt.beds} Bed · {apt.baths} Bath · {apt.sqft} Sq Ft</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className={`mobile-toggle ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      {menuOpen && <div className="header-overlay" onClick={closeMenu}></div>}
    </header>
  );
}
