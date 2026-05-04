import { motion } from 'framer-motion';
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

export default function Home({ isFavorite, toggleFavorite }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <Hero />
      <Marquee
        items={['LUXURY LIVING', 'PREMIO HOMES', 'LAHORE', 'SMART INVESTMENT']}
        variant="dark"
      />
      <FloorPlans />
      <SelfDrawingLine />
      <Stats />
      <Marquee
        items={['OUR PROJECTS', 'MODERN DESIGN', 'TRUSTED BUILDER', 'FLEXIBLE PLANS']}
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
