import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header-Style'>
            <img src="logo192.png" alt="" />
            <div className='header-menu'>
                <a href="#">Home</a>
                <a href="#">Shop</a>
                <a href="#">Contact</a>
            </div>
        </div>
    );
};

export default Header;