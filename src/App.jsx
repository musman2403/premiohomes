import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import useFavorites from './hooks/useFavorites';

import Home from './pages/Home';
import AboutUsPage from './pages/AboutUsPage';
import GalleryPage from './pages/GalleryPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  return (
    <Router>
      <Header favorites={favorites} />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home isFavorite={isFavorite} toggleFavorite={toggleFavorite} />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/pricing" element={<PricingPage isFavorite={isFavorite} toggleFavorite={toggleFavorite} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}