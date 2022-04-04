import React from 'react';
import './Sharee.css'

const Sharee = (props) => {
    const {name, comment, rating} = props.sharee;
    return (
        <div className='sharee-container'>
            <h2>Name: {name}</h2>
            <p>Comment: {comment}</p>
            <p>Rating: {rating}</p>
        </div>
    );
};

export default Sharee;