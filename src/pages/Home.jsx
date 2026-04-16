import Hero from '../components/Hero';
import FloorPlans from '../components/FloorPlans';
import Stats from '../components/Stats';
import ProjectDetails from '../components/ProjectDetails';
import Amenities from '../components/Amenities';
import Apartments from '../components/Apartments';
import PaymentPlan from '../components/PaymentPlan';
import Neighborhood from '../components/Neighborhood';

export default function Home({ isFavorite, toggleFavorite }) {
  return (
    <>
      <Hero />
      <FloorPlans />
      <Stats />
      <ProjectDetails />
      <Amenities />
      <Apartments isFavorite={isFavorite} toggleFavorite={toggleFavorite} />
      <Neighborhood />
      <PaymentPlan />
    </>
  );
}
