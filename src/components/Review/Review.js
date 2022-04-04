import React from 'react';
import './Review.css'
import useSharee from '../../hooks/useSharee';
import Sharee from '../Sharee/Sharee';

const Review = () => {
    const [sharees, setSharees] = useSharee();
    return (
        <div className='prduct-review'>
            {
                sharees.map(sharee => <Sharee
                key={sharee.id}
                sharee={sharee}
                ></Sharee>)
            }
        </div>
    );
};

export default Review;