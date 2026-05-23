import { motion } from 'framer-motion';
import useSEO from '../hooks/useSEO';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import FloorPlans from '../components/FloorPlans';
import Stats from '../components/Stats';
import ProjectDetails from '../components/ProjectDetails';
import Amenities from '../components/Amenities';
import Testimonials from '../components/Testimonials';
import CTABanner from '../components/CTABanner';
import Neighborhood from '../components/Neighborhood';
import SelfDrawingLine from '../components/SelfDrawingLine';

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "ApartmentComplex",
  "name": "Premio Homes — New Lahore City",
  "description": "Luxury residential apartments in New Lahore City, Phase 3, Lahore, Pakistan. Studio, 1, 2 & 3 bedroom apartments with premium amenities and modern architecture.",
  "url": "https://www.premiohomes.com",
  "image": "https://www.premiohomes.com/og-image.jpg",
  "telephone": "+923225558812",
  "email": "info@premiohomes.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Plaza No. 209, D Block, Phase 3",
    "addressLocality": "New Lahore City",
    "addressRegion": "Punjab",
    "addressCountry": "PK"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "31.5204",
    "longitude": "74.3587"
  },
  "numberOfAvailableAccommodation": [
    {
      "@type": "Accommodation",
      "name": "Studio / One Bedroom",
      "numberOfBedrooms": 1
    },
    {
      "@type": "Accommodation",
      "name": "Two Bedrooms",
      "numberOfBedrooms": 2
    },
    {
      "@type": "Accommodation",
      "name": "Three Bedrooms",
      "numberOfBedrooms": 3
    }
  ],
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "Fitness Center" },
    { "@type": "LocationFeatureSpecification", "name": "Swimming Pool" },
    { "@type": "LocationFeatureSpecification", "name": "Covered Parking" },
    { "@type": "LocationFeatureSpecification", "name": "24/7 Concierge" },
    { "@type": "LocationFeatureSpecification", "name": "Rooftop Garden" },
    { "@type": "LocationFeatureSpecification", "name": "Smart Home Features" }
  ],
  "numberOfFloors": 12
};

export default function Home({ isFavorite, toggleFavorite }) {
  useSEO({
    title: 'Luxury Apartments in Lahore | New Lahore City',
    description: 'Premio Homes offers premium residential apartments in New Lahore City, Phase 3. Studio, 1, 2 & 3 bedroom luxury residences with world-class amenities, modern architecture, and flexible payment plans.',
    keywords: 'Premio Homes, luxury apartments Lahore, New Lahore City apartments, Phase 3 apartments Lahore, residential real estate Lahore, apartments for sale Lahore, luxury homes Pakistan, modern apartments Lahore',
    canonicalPath: '/',
    schema: homeSchema
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <Hero />
      <Marquee
        items={['Luxury Living', 'Premio Homes', 'New Lahore City', 'Smart Investment']}
        variant="dark"
      />
      <FloorPlans />
      <SelfDrawingLine />
      <Stats />
      <Marquee
        items={['Curated Residences', 'Modern Architecture', 'Trusted Excellence', 'Premium Lifestyle']}
        variant="light"
        speed="slow"
      />
      <SelfDrawingLine />
      <ProjectDetails />
      <Amenities />
      <SelfDrawingLine />
      <Testimonials />
      <SelfDrawingLine />
      <CTABanner />
      <Neighborhood />
    </motion.div>
  );
}
