import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-column">
                        <h3>Shop</h3>
                        <ul>
                            <li><a href="#men">Men's Collection</a></li>
                            <li><a href="#women">Women's Collection</a></li>
                            <li><a href="#kids">Kids Collection</a></li>
                            <li><a href="#">New Arrivals</a></li>
                            <li><a href="#">Best Sellers</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Help</h3>
                        <ul>
                            <li><a href="#">Customer Service</a></li>
                            <li><a href="#">Shipping & Returns</a></li>
                            <li><a href="#">Size Guide</a></li>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#about">Our Story</a></li>
                            <li><a href="#">Sustainability</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">Store Locator</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Connect</h3>
                        <p>Follow us on social media for the latest updates and style inspiration.</p>
                        <div className="social-icons">
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-tiktok"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                        </div>
                    </div>
                </div>

                <div className="copyright">
                    <p>&copy; 2023 Urban Style. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
