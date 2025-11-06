import React from 'react';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-bg"></div>
            <div className="hero-content">
                <h1>Street Style Revolution</h1>
                <p>Discover the latest urban fashion trends and express your unique style with our curated collection of streetwear essentials.</p>
                <div className="hero-btns">
                    <a href="#men" className="btn">Shop Now</a>
                    <a href="#about" className="btn btn-secondary">Explore</a>
                </div>
            </div>
            <a href="#men" className="scroll-down">
                <i className="fas fa-chevron-down fa-2x"></i>
            </a>
        </section>
    );
};

export default Hero;
