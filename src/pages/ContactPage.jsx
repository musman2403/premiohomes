import PageHero from '../components/PageHero';
import ScheduleTour from '../components/ScheduleTour';
import contactHeroImg from '../assets/images/contact_hero.png';

export default function ContactPage() {
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
