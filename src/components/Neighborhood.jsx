import { useEffect, useRef } from 'react';
import familyImg from '../assets/images/family.png';
import './Neighborhood.css';

export default function Neighborhood() {
    const imgRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );
        if (imgRef.current) observer.observe(imgRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="neighborhood section">
            <div className="container">
                <div className="neighborhood-grid">
                    <div className="neighborhood-text">
                        <h2>Located in the peacefulness of Asheville, NC</h2>
                        <p>
                            The Nook is a condo in Asheville, NC. The land around it was left untouched,
                            and the surrounding apartments are built from sustainable materials. Enjoy
                            the tranquility of nature while being minutes away from downtown dining,
                            arts, and entertainment.
                        </p>
                    </div>
                    <div className="neighborhood-image" ref={imgRef}>
                        <img src={familyImg} alt="Family enjoying the peaceful neighborhood" />
                    </div>
                </div>
            </div>
        </section>
    );
}
