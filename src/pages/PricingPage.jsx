import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import Apartments from '../components/Apartments';
import PaymentPlan from '../components/PaymentPlan';
import CTABanner from '../components/CTABanner';
import pricingHeroImg from '../assets/images/hero.webp';

export default function PricingPage({ isFavorite, toggleFavorite }) {
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
