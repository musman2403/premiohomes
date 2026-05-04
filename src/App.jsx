import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
import useFavorites from './hooks/useFavorites';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

export default function App() {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  return (
    <Router>
      <Header favorites={favorites} />
      <main id="main-content">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home isFavorite={isFavorite} toggleFavorite={toggleFavorite} />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/pricing" element={<PricingPage isFavorite={isFavorite} toggleFavorite={toggleFavorite} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </Router>
  );
}