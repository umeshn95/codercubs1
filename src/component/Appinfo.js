import React from 'react'
import Navbar from './Navbar'
import appinfo from '../image/app_dev_info.png';
import './Appinfo.css'
import { Link } from 'react-router-dom';
import appdev from '../image/course_appdev_header.png'

function Appinfo() {
    return (
        <div>
            <div className='course_appdev_header'><img src={appdev}></img></div>
            <div className='app_info'><img src={appinfo}></img></div>
           <Link to='/proceed'> <div className='app_btn'><button className='btn_app'>Enroll Now</button></div></Link>
            
        </div>
    )
}

export default Appinfo;
