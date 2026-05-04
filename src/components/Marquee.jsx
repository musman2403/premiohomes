import './Marquee.css';

export default function Marquee({ items = ['LUXURY LIVING', 'PREMIO HOMES', 'LAHORE'], speed = 'normal', variant = 'dark' }) {
    // Duplicate items enough times for seamless loop
    const repeated = [...items, ...items, ...items, ...items];

    return (
        <div className={`marquee marquee--${variant} marquee--${speed}`}>
            <div className="marquee-track">
                {repeated.map((item, i) => (
                    <span className="marquee-item" key={i}>
                        <span className="marquee-text">{item}</span>
                        <span className="marquee-dot">✦</span>
                    </span>
                ))}
            </div>
            <div className="marquee-track" aria-hidden="true">
                {repeated.map((item, i) => (
                    <span className="marquee-item" key={`dup-${i}`}>
                        <span className="marquee-text">{item}</span>
                        <span className="marquee-dot">✦</span>
                    </span>
                ))}
            </div>
        </div>
    );
}
