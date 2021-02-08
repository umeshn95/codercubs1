import React from 'react'
import ourteach1 from '../image/our_teaching_phillosphy.png';
import ourteach2 from '../image/our_teaching_phillosphy1.png';
import ourteach3 from '../image/our_teaching_phillosphy2.png';
import Footer from './Footer';
import Navbar from './Navbar';


function Ourteachp() {
    return (
        <div>
            <Navbar></Navbar>
            <div className='ourteach1'><img src={ourteach1}></img></div>
            <div className='ourteach2'><img src={ourteach2}></img></div>
            <div className='ourteach3'><img src={ourteach3}></img></div>
            <Footer></Footer>
        </div>
    )
}

export default Ourteachp
