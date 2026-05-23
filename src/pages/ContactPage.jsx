import PageHero from '../components/PageHero';
import ScheduleTour from '../components/ScheduleTour';
import familyImg from '../assets/images/family.webp';

export default function ContactPage() {
    return (
        <>
            <PageHero
                title="Contact Us"
                subtitle="We'd love to hear from you. Reach out to our team for property inquiries, tours, and investment opportunities."
                backgroundImage={familyImg}
            />
            <ScheduleTour />
        </>
    );
}
