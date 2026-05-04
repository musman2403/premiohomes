import PageHero from '../components/PageHero';
import Marquee from '../components/Marquee';
import AboutUs from '../components/AboutUs';
import CTABanner from '../components/CTABanner';
import natureImg from '../assets/images/nature.webp';

export default function AboutUsPage() {
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
            <CTABanner />
        </>
    );
}
