import useScrollReveal from '../hooks/useScrollReveal';
import natureImg from '../assets/images/nature.webp';
import heroImg from '../assets/images/hero.webp';
import './About.css';

export default function About() {
    const sectionRef = useScrollReveal();

    return (
        <section className="about section cinema-section" id="about" ref={sectionRef}>
            <div className="container">
                <div className="about-block">
                    <div className="about-text" data-cinema="tilt-left">
                        <h2>Value, Transparency, and Client Satisfaction.</h2>
                        <p>
                            Primeo Homes is backed by a team with over 10 years of experience in real estate dealing,
                            property management, and development planning. Our focus is on delivering
                            unmatched value to our clients in Lahore through a structured and transparent approach.
                        </p>
                    </div>
                    <div className="about-image" data-cinema="tilt-right" data-cinema-delay="2">
                        <img src={natureImg} alt="Primeo Homes Development" width="600" height="400" loading="lazy" decoding="async" />
                    </div>
                </div>

                <div className="about-block reverse">
                    <div className="about-text" data-cinema="tilt-right">
                        <h2>Development in Progress.</h2>
                        <p>
                            We are currently in the development phase, with planning, groundwork, and
                            project setup actively in progress. Our team's industry exposure enables
                            us to understand market dynamics and deliver reliable solutions.
                        </p>
                    </div>
                    <div className="about-image" data-cinema="tilt-left" data-cinema-delay="2">
                        <img src={heroImg} alt="Contemporary apartment interior" width="600" height="400" loading="lazy" decoding="async" />
                    </div>
                </div>
            </div>
        </section>
    );
}
