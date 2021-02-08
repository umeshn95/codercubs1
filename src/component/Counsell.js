import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import counsell from '../image/career_councel.png'
import './Counsell.css'
import { Link } from 'react-router-dom'
function Counsell() {
    return (
        <div>
            
            <div className='counsell'><img src={counsell}></img></div>
            <Link to='/proceed'><div className='app_btn'><button className='btn_app'>Enroll Now</button></div></Link>
            <Footer></Footer>
        </div>
    )
}

export default Counsell
