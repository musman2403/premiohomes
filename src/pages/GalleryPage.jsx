import PageHero from '../components/PageHero';
import Gallery from '../components/Gallery';
import heroImg from '../assets/images/hero.webp';

export default function GalleryPage() {
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
