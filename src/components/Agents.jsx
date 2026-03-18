import agent1 from '../assets/images/agent1.webp';
import agent2 from '../assets/images/agent2.webp';
import agent3 from '../assets/images/agent3.webp';
import './Agents.css';

const agents = [
    {
        name: 'James Mitchell',
        role: 'Senior Agent',
        bio: 'With over 10 years of experience, James specializes in luxury apartments and has helped hundreds of families find their dream home.',
        img: agent1,
    },
    {
        name: 'Sarah Anderson',
        role: 'Lead Consultant',
        bio: 'Sarah brings a personal touch to every client interaction, ensuring a seamless home-buying experience from start to finish.',
        img: agent2,
    },
    {
        name: 'David Thompson',
        role: 'Property Expert',
        bio: 'David\'s deep knowledge of the Asheville market makes him the go-to advisor for finding the perfect property investment.',
        img: agent3,
    },
];

export default function Agents() {
    return (
        <section className="agents section">
            <div className="container">
                <h2 className="section-title">Meet Our Agents</h2>
                <p className="agents-subtitle">Our experienced team is here to guide you every step of the way.</p>
                <div className="agents-grid">
                    {agents.map((agent) => (
                        <div className="agent-card" key={agent.name}>
                            <div className="agent-avatar">
                                <img src={agent.img} alt={agent.name} width="300" height="350" />
                            </div>
                            <h3 className="agent-name">{agent.name}</h3>
                            <p className="agent-role">{agent.role}</p>
                            <p className="agent-bio">{agent.bio}</p>
                            <div className="agent-socials">
                                <a href="#" aria-label="Phone">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.11 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                </a>
                                <a href="#" aria-label="Email">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                </a>
                                <a href="#" aria-label="LinkedIn">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
