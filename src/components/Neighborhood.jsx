import useScrollReveal from '../hooks/useScrollReveal';
import familyImg from '../assets/images/family.webp';
import './Neighborhood.css';

export default function Neighborhood() {
    const sectionRef = useScrollReveal();

    return (
        <section className="neighborhood section" ref={sectionRef}>
            <div className="container">
                <div className="neighborhood-grid">
                    <div className="neighborhood-text" data-reveal="slide-left">
                        <h2>Located in the Heart of Lahore</h2>
                        <p>
                            Primeo Homes is strategically located in prime areas across Lahore, offering 
                            the perfect blend of modern living and urban convenience. Our developments 
                            focus on careful land selection and proximity to key amenities, ensuring 
                            long-term value and comfort for every client.
                        </p>
                    </div>
                    <div className="neighborhood-image" data-reveal="slide-right" style={{ transitionDelay: '0.15s' }}>
                        <img src={familyImg} alt="Family enjoying the peaceful neighborhood" width="600" height="400" loading="lazy" decoding="async" />
                    </div>
                </div>
            </div>
        </section>
    );
}
