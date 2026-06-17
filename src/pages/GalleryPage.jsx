import useSEO from '../hooks/useSEO';
import PageHero from '../components/PageHero';
import Gallery from '../components/Gallery';
import heroImg from '../assets/images/gallery_hero.webp';

const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "name": "Premio Homes Photo & Renders Gallery",
  "description": "Visual tour and high-quality rendering gallery of studio, 1, 2, and 3 bedroom luxury apartments, interiors, and premium lifestyle amenities at Premio Homes Lahore.",
  "url": "https://www.premiohomes.com/gallery",
  "publisher": {
    "@type": "Organization",
    "name": "Premio Homes"
  }
};

export default function GalleryPage() {
    useSEO({
        title: 'Gallery | Premio Homes - Luxury Apartment Renders & Interiors',
        description: 'Explore the visual showcase of Premio Homes. Browse renders, modern interior layouts, floor plans, and the luxury lifestyle awaiting you in Lahore.',
        keywords: 'Premio Homes gallery, apartment renders Lahore, interior design Lahore, luxury apartments pictures, Lahore real estate gallery',
        canonicalPath: '/gallery',
        schema: gallerySchema
    });

    return (
        <>
            <PageHero
                title="Our Gallery"
                subtitle="Explore our properties, interiors, and the lifestyle that awaits you at Premio Homes."
                backgroundImage={heroImg}
            />
            <Gallery />
        </>
    );
}
