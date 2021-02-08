import React from 'react'
import Navbar from './Navbar'
import how from '../image/howitwork.jpg'
import Footer from './Footer';
import './How.css'

function How() {
    return (
        <div>
            <Navbar></Navbar>
            <div className='how1'><img src={how}></img></div>
            <Footer></Footer>
        </div>
    )
}

export default How
