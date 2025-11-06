import React, { useState } from 'react';

const CategoryNav = () => {
    const [activeLink, setActiveLink] = useState('Men');

    const handleLinkClick = (category) => {
        setActiveLink(category);
    };

    return (
        <div className="category-nav">
            <div className="container">
                <ul>
                    <li><a href="#men" className={activeLink === 'Men' ? 'active' : ''} onClick={() => handleLinkClick('Men')}>Men</a></li>
                    <li><a href="#women" className={activeLink === 'Women' ? 'active' : ''} onClick={() => handleLinkClick('Women')}>Women</a></li>
                    <li><a href="#kids" className={activeLink === 'Kids' ? 'active' : ''} onClick={() => handleLinkClick('Kids')}>Kids</a></li>
                    <li><a href="#new-arrivals" className={activeLink === 'New Arrivals' ? 'active' : ''} onClick={() => handleLinkClick('New Arrivals')}>New Arrivals</a></li>
                    <li><a href="#sale" className={activeLink === 'Sale' ? 'active' : ''} onClick={() => handleLinkClick('Sale')}>Sale</a></li>
                </ul>
            </div>
        </div>
    );
};

export default CategoryNav;
