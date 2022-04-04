import React from 'react';
import './Sharee.css'

const Sharee = (props) => {
    const {name, comment, rating, image} = props.sharee;
    console.log(image);
    return (
        <div className='sharee-container'>
            <img src={image} alt="no" />
            <div>
            <h2>Name: {name}</h2>
            <p>Comment: {comment}</p>
            <h4>Rating: {rating}</h4>
            </div>
        </div>
    );
};

export default Sharee;