import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='header-container'>
            <h3>Annapurna Bastralay.com</h3>
            <Link to="/home">Home</Link>
            <Link to="/review">Review</Link>
            <Link to="/dashboard">DashBoard</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/about">About</Link>
        </nav>
    );
};

export default Header;