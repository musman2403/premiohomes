import { useEffect, useRef } from 'react';
import familyImg from '../assets/images/family.webp';
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
                        <h2>Located in the Heart of Lahore</h2>
                        <p>
                            Primeo Homes is strategically located in prime areas across Lahore, offering 
                            the perfect blend of modern living and urban convenience. Our developments 
                            focus on careful land selection and proximity to key amenities, ensuring 
                            long-term value and comfort for every client.
                        </p>
                    </div>
                    <div className="neighborhood-image" ref={imgRef}>
                        <img src={familyImg} alt="Family enjoying the peaceful neighborhood" width="600" height="400" loading="lazy" decoding="async" />
                    </div>
                </div>
            </div>
        </section>
    );
}
