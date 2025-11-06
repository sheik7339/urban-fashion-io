import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2 className="section-title">Contact Us</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Get in Touch</h3>
                        <p>Have questions about our products or need assistance with your order? Reach out to us using the contact information below or fill out the form.</p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <div className="contact-icon">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div>
                                    <h4>Phone</h4>
                                    <p>+91 7339273120</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div>
                                    <h4>Email</h4>
                                    <p>mohammedsheik285@gmail.com</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div>
                                    <h4>Address</h4>
                                    <p>Tiruppur, Tamil Nadu - 641606</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form">
                        <h3>Send us a Message</h3>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input type="text" id="name" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Your Email</label>
                                <input type="email" id="email" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea id="message" rows="5" required></textarea>
                            </div>

                            <button type="submit" className="btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
