import { useEffect, useRef } from 'react';
import natureImg from '../assets/images/nature.webp';
import heroImg from '../assets/images/hero.webp';
import './About.css';

export default function About() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.3 }
        );

        const images = sectionRef.current?.querySelectorAll('.about-image');
        images?.forEach((img) => observer.observe(img));
        return () => observer.disconnect();
    }, []);

    return (
        <section className="about section" id="about" ref={sectionRef}>
            <div className="container">
                <div className="about-block">
                    <div className="about-text">
                        <h2>Value, Transparency, and Client Satisfaction.</h2>
                        <p>
                            Primeo Homes is backed by a team with over 10 years of experience in real estate dealing, 
                            property management, and development planning. Our focus is on delivering 
                            unmatched value to our clients in Lahore through a structured and transparent approach.
                        </p>
                    </div>
                    <div className="about-image slide-right">
                        <img src={natureImg} alt="Primeo Homes Development" width="600" height="400" loading="lazy" decoding="async" />
                    </div>
                </div>

                <div className="about-block reverse">
                    <div className="about-text">
                        <h2>Development in Progress.</h2>
                        <p>
                            We are currently in the development phase, with planning, groundwork, and 
                            project setup actively in progress. Our team's industry exposure enables 
                            us to understand market dynamics and deliver reliable solutions.
                        </p>
                    </div>
                    <div className="about-image slide-left">
                        <img src={heroImg} alt="Contemporary apartment interior" width="600" height="400" loading="lazy" decoding="async" />
                    </div>
                </div>
            </div>
        </section>
    );
}
