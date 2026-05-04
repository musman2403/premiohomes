import PageHero from '../components/PageHero';
import Agents from '../components/Agents';
import ScheduleTour from '../components/ScheduleTour';
import Marquee from '../components/Marquee';
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
            <Marquee
                items={['SCHEDULE A TOUR', 'INVEST WITH CONFIDENCE', 'PREMIO HOMES']}
                variant="dark"
            />
            <Agents />
        </>
    );
}
