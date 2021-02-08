import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import aboutus from '../image/about___us.png';
function Aboutus() {
    return (
        <div>
            <Navbar></Navbar>
             <div className='abotus'><img src={aboutus}></img></div>
            <Footer></Footer>
        </div>
    )
}

export default Aboutus
