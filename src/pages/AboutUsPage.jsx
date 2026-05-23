import useSEO from '../hooks/useSEO';
import PageHero from '../components/PageHero';
import Marquee from '../components/Marquee';
import AboutUs from '../components/AboutUs';
import Agents from '../components/Agents';
import CTABanner from '../components/CTABanner';
import natureImg from '../assets/images/nature.webp';

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "mainEntity": {
    "@type": "Organization",
    "name": "Premio Homes",
    "description": "Premium real estate developer in Lahore, Pakistan, specializing in luxury residential apartments.",
    "url": "https://www.premiohomes.com",
    "logo": "https://www.premiohomes.com/favicon.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+923225558812",
      "contactType": "sales",
      "email": "info@premiohomes.com",
      "areaServed": "PK",
      "availableLanguage": ["English", "Urdu"]
    }
  }
};

export default function AboutUsPage() {
    useSEO({
        title: 'About Us | Premio Homes - Luxury Real Estate Lahore',
        description: 'Learn about Premio Homes, our decade of real estate development expertise, transparency, and team of dedicated real estate agents building premium apartments in Pakistan.',
        keywords: 'About Premio Homes, real estate developers Lahore, luxury homes Pakistan, Lahore real estate agents, Premio Homes team',
        canonicalPath: '/about',
        schema: aboutSchema
    });

    return (
        <>
            <PageHero
                title="About Premio Homes"
                subtitle="A decade of real estate expertise. Building homes with transparency, commitment, and trust."
                backgroundImage={natureImg}
            />
            <Marquee
                items={['TRANSPARENCY', 'TRUST', 'QUALITY', 'COMMITMENT']}
                variant="dark"
                speed="slow"
            />
            <AboutUs />
            <Marquee
                items={['MEET THE TEAM', 'EXPERIENCED AGENTS', 'PREMIO HOMES']}
                variant="dark"
            />
            <Agents />
            <CTABanner />
        </>
    );
}
