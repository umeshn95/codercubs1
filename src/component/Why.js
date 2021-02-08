import React from 'react'
import Navbar from './Navbar';
import why1 from '../image/whycode.png';
import why2 from '../image/whycode1.png';
import Footer from './Footer';

function Why() {
    return (
        <div>
            <Navbar></Navbar>
            <div className='why1'><img src={why1}></img></div>
            <div className='why2'><img src={why2}></img></div>

<Footer></Footer>
        </div>
    )
}

export default Why
