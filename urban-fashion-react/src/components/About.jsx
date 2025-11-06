import React from 'react';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="about-content">
                    <div className="about-img">
                        <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="About Urban Style" />
                    </div>
                    <div className="about-text">
                        <h2>Our Story</h2>
                        <p>Urban Style was born from the streets, inspired by the vibrant energy of urban culture and the need for self-expression through fashion.</p>
                        <p>We believe that clothing is more than just fabric - it's a statement, an attitude, and a reflection of your identity.</p>
                        <p>Our mission is to bring you the latest trends while maintaining the authenticity and edge that defines true streetwear.</p>
                        <a href="#" className="btn">Learn More</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
