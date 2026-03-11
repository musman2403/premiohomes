import Header from './components/Header';
import Hero from './components/Hero';
import FloorPlans from './components/FloorPlans';
import Stats from './components/Stats';
import About from './components/About';
import AboutUs from './components/AboutUs';
import Amenities from './components/Amenities';
import Apartments from './components/Apartments';
import Gallery from './components/Gallery';
import Neighborhood from './components/Neighborhood';
import Agents from './components/Agents';
import ScheduleTour from './components/ScheduleTour';
import Footer from './components/Footer';
import useFavorites from './hooks/useFavorites';

export default function App() {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  return (
    <>
      <Header favorites={favorites} />
      <Hero />
      <FloorPlans />
      <Stats />
      <About />
      <AboutUs />
      <Amenities />
      <Apartments isFavorite={isFavorite} toggleFavorite={toggleFavorite} />
      <Gallery />
      <Neighborhood />
      <Agents />
      <ScheduleTour />
      <Footer />
    </>
  );
}