import React from 'react';

const Newsletter = () => {
    return (
        <section className="newsletter">
            <div className="container">
                <h2>Join Our Community</h2>
                <p>Subscribe to our newsletter and get 15% off your first order. Be the first to know about new collections and exclusive offers.</p>
                <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                    <input type="email" placeholder="Enter your email" required />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;
