import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <h1 className='opps'>OOPS! <br/>Sorry User</h1>
            <h3>404 - PAGE NOT FOUND</h3>
            <p>This page you are looking for might have been removed</p>
            <p>had its name changed or is temporary unavailable.</p>
        </div>
    );
};

export default NotFound;