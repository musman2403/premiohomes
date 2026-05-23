import { motion } from 'framer-motion';
import useSEO from '../hooks/useSEO';
import PageHero from '../components/PageHero';
import Apartments from '../components/Apartments';
import PaymentPlan from '../components/PaymentPlan';
import CTABanner from '../components/CTABanner';
import pricingHeroImg from '../assets/images/hero.webp';

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Investment & Pricing | Premio Homes",
  "description": "View pricing ranges and flexible installment payment plans for studio, 1, 2, and 3 bedroom luxury apartments at Premio Homes Lahore.",
  "url": "https://www.premiohomes.com/pricing",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "PKR",
    "lowPrice": "12500000",
    "highPrice": "24500000",
    "offerCount": "3"
  }
};

export default function PricingPage({ isFavorite, toggleFavorite }) {
    useSEO({
        title: 'Pricing & Payment Plans | Premio Homes Lahore',
        description: 'Check transparent pricing ranges and flexible 4-year installment payment plans for studio, 1, 2, and 3 bedroom luxury apartments in New Lahore City, Phase 3.',
        keywords: 'Premio Homes price, luxury apartments cost Lahore, installment payment plan Lahore, 1 bedroom apartment price Lahore, 2 bedroom flats cost Lahore, real estate investment Pakistan',
        canonicalPath: '/pricing',
        schema: pricingSchema
    });

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <PageHero 
                title="Investment & Pricing" 
                subtitle="Transparent pricing and flexible investment plans tailored for your dream lifestyle in Premio Homes."
                backgroundImage={pricingHeroImg}
            />
            <div className="pricing-content" style={{ background: 'var(--color-bg-light)', padding: '60px 0' }}>
                <Apartments isFavorite={isFavorite} toggleFavorite={toggleFavorite} />
                <PaymentPlan />
            </div>
            <CTABanner />
        </motion.div>
    );
}
