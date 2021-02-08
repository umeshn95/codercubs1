import React from 'react'
import Navbar from './Navbar'
import review1 from '../image/review_1.png';
import review2 from '../image/review_2.png';
import Footer from './Footer';
import './Review.css';

function Review() {
    return (
        <div>
            <Navbar></Navbar>
            
            <div className='review1'><img src={review1}></img></div>
            <div className='review2'><img src={review2}></img></div>
            <Footer></Footer>
        </div>
    )
}

export default Review
