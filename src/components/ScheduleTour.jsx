import './ScheduleTour.css';

export default function ScheduleTour() {
    return (
        <section className="contact section" id="contact">
            <div className="container">
                <div className="contact-wrapper">
                    {/* Left: Info */}
                    <div className="contact-info">
                        <h2>Connect with Primeo Homes</h2>
                        <p className="contact-info-desc">
                            We believe in building homes with transparency — not just making promises. 
                            Get in touch to learn more about our development projects and professional 
                            real estate services in Lahore.
                        </p>

                    </div>

                    {/* Right: Form */}
                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-row">
                            <input type="text" placeholder="First Name" />
                            <input type="text" placeholder="Last name" />
                        </div>
                        <input type="email" placeholder="Email" />
                        <textarea placeholder="Message"></textarea>
                        <button type="submit" className="btn-submit">Schedule a Tour</button>
                    </form>
                </div>


            </div>
        </section>
    );
}
