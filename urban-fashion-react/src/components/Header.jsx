import React, { useState, useEffect } from 'react';

const Header = ({ onCartClick, onLoginClick }) => {
    const [scrolled, setScrolled] = useState(false);
    const [isNavActive, setIsNavActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = () => {
        setIsNavActive(false);
    };

    return (
        <header id="header" className={scrolled ? 'scrolled' : ''}>
            <div className="container header-container">
                <div className="logo-container">
                    <a href="#" className="logo">URBANFASHION</a>
                </div>

                <div className="mobile-menu-btn" onClick={() => setIsNavActive(!isNavActive)}>
                    <i className="fas fa-bars"></i>
                </div>

                <nav id="nav" className={isNavActive ? 'active' : ''}>
                    <ul>
                        <li><a href="#" onClick={handleLinkClick}>Home</a></li>
                        <li><a href="#" onClick={handleLinkClick}>Men</a></li>
                        <li><a href="#" onClick={handleLinkClick}>Women</a></li>
                        <li><a href="#" onClick={handleLinkClick}>Kids</a></li>
                        <li><a href="#" onClick={handleLinkClick}>About</a></li>
                        <li><a href="#" onClick={handleLinkClick}>Contact</a></li>
                    </ul>
                </nav>

                <div className="nav-icons">
                    <a href="#" id="search-btn"><i className="fas fa-search"></i></a>
                    <a href="#" id="cart-btn" onClick={(e) => { e.preventDefault(); onCartClick(); }}><i className="fas fa-shopping-bag"></i></a>
                    <a href="#" id="login-btn" onClick={(e) => { e.preventDefault(); onLoginClick(); }}><i className="fas fa-user"></i></a>
                </div>
            </div>
        </header>
    );
};

export default Header;