import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='header-container'>
            <h2>Annapurna Bastralay.com</h2>
            <div>
                <Link to="/home">Home</Link>
                <Link to="/review">Review</Link>
                <Link to="/dashboard">DashBoard</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    );
};

export default Header;