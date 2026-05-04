import { useEffect, useRef } from 'react';

/**
 * Universal scroll-reveal hook.
 * Adds a 'revealed' class when element enters viewport.
 * Supports both data-reveal and data-cinema attributes.
 * 
 * @param {Object} options
 * @param {number} options.threshold - IntersectionObserver threshold (0-1)
 * @param {string} options.rootMargin - margin around root
 * @returns {React.RefObject}
 */
export default function useScrollReveal({ threshold = 0.15, rootMargin = '0px 0px -60px 0px' } = {}) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold, rootMargin }
        );

        // Observe all elements with data-reveal or data-cinema
        const revealEls = el.querySelectorAll('[data-reveal], [data-cinema], .cinema-divider');
        revealEls.forEach((child) => observer.observe(child));

        // Also observe the container itself if it has either attribute
        if (el.hasAttribute('data-reveal') || el.hasAttribute('data-cinema')) {
            observer.observe(el);
        }

        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    return ref;
}
