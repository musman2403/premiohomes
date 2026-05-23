import useSEO from '../hooks/useSEO';
import PageHero from '../components/PageHero';
import ScheduleTour from '../components/ScheduleTour';
import contactHeroImg from '../assets/images/contact_hero.png';

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Us | Premio Homes",
  "description": "Get in touch with the Premio Homes sales and inquiries team. Request brochures, book a physical or virtual tour, or find office location.",
  "url": "https://www.premiohomes.com/contact",
  "mainEntity": {
    "@type": "Organization",
    "name": "Premio Homes",
    "telephone": "+923225558812",
    "email": "info@premiohomes.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plaza No. 209, D Block, Phase 3",
      "addressLocality": "New Lahore City",
      "addressRegion": "Punjab",
      "addressCountry": "PK"
    }
  }
};

export default function ContactPage() {
    useSEO({
        title: 'Contact Us & Schedule a Tour | Premio Homes Lahore',
        description: 'Get in touch with Premio Homes. Contact our sales representatives, book a private site viewing tour, or request pricing brochures.',
        keywords: 'contact Premio Homes, schedule tour Premio Homes, Lahore real estate phone, buy apartment Lahore contact, office location Premio Homes Lahore',
        canonicalPath: '/contact',
        schema: contactSchema
    });

    return (
        <>
            <PageHero
                title="Contact Us"
                subtitle="We'd love to hear from you. Reach out to our team for property inquiries, tours, and investment opportunities."
                backgroundImage={contactHeroImg}
            />
            <ScheduleTour />
        </>
    );
}
