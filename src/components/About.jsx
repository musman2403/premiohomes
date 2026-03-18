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
                        <h2>A modern living space surrounded by nature.</h2>
                        <p>
                            The Nook is a condo in Asheville, NC. The land around it was left untouched,
                            and the surrounding apartments are built from sustainable materials. Experience
                            contemporary luxury in a setting that respects and celebrates the natural world.
                        </p>
                    </div>
                    <div className="about-image slide-right">
                        <img src={natureImg} alt="Nature surrounding The Nook apartments" width="600" height="400" loading="lazy" decoding="async" />
                    </div>
                </div>

                <div className="about-block reverse">
                    <div className="about-text">
                        <h2>Contemporary living with a park-like setting.</h2>
                        <p>
                            The Nook is a condo in Asheville, NC. The land around it was left untouched,
                            and the surrounding apartments are built from sustainable materials. Every
                            apartment features large windows that frame the breathtaking natural beauty outside.
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
