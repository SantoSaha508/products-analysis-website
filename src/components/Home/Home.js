import React from 'react';
import { Link } from 'react-router-dom';
import useSharee from '../../hooks/useSharee';
import Review from '../Review/Review';
import Sharee from '../Sharee/Sharee';
import './Home.css'

const Home = () => {
    const [sharees, setSharees] = useSharee();
    return (
        <div>
            {/* image and text part */}
            <div className='home-container'>
                <div className='home-image'>
                    <img src="https://www.lerevecraze.com/wp-content/uploads/customer-registration/631f464c7962f3f9df4b7a0b41c32f18.jpg" alt="" />
                </div>
                <div className='text-container'>
                    <h1>Choose <span className='shope-info'>Your Sharee From a Sharee</span> Hub</h1>
                    <p>We are exparte in exclusive sharee collection. All kinds of sharee you can find our hub. In this Eid, we are ready to welcome you. Please feel free to comments / reviews and saty with us.</p>
                </div>
            </div>
            {/* review part */}
            <div>
                <h2 className='customerReview'>Customer Review</h2>
                <div className='cart-Container'>
                {
                    sharees.map(sharee => <Sharee
                    key={sharee.id}
                    sharee={sharee}
                    ></Sharee>).slice(0, 3)
                }
                </div>
                <Link to="/review" elment={<Review></Review>}><button className='seeAll-btn'>See All---</button></Link>
            </div>
        </div>
    );
};

export default Home;