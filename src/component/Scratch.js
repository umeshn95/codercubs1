import React from 'react'
import { Link } from 'react-router-dom';

import scratch from '../image/scrath_prog.png'
import './Scratch.css'

function Scratch() {
    return (
        <div>
            
            <div className='scratch__info'><img src={scratch}></img></div>
           <Link to='/proceed'><div className='app_btn'><button className='btn_app'>Enroll Now</button></div></Link> 
            
        </div>
    )
}

export default Scratch;
