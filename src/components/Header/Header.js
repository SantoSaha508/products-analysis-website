import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <h3>Annapurna Bastralay.com</h3>
            <a href="/home">Home</a>
            <a href="/review">Review</a>
            <a href="/dashboard">DashBoard</a>
            <a href="/blogs">Blogs</a>
            <a href="/about">About</a>
        </div>
    );
};

export default Header;