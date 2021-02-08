import React from 'react'
import './Footer.css'
import mobile from'../image/mobile-alt-solid.svg'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <div>
               <div className='footer'>
               <Link to='/'><div className='codercubs'>CoderCubs</div>
                <div className='home1'>Home</div></Link> 
<Link to='/how'><div className='how'>How It Works</div></Link>
<Link to='/whycode'><div className='why'>Why Coding</div></Link>
<Link to='/review'><div className='review'>Review</div></Link>
<Link to='/aboutus'><div className='about'>About</div></Link>

<Link to='/ourteachp'><div className='teac'>Our Teaching Phillosphy</div></Link>
<Link to='/mentor'><div className='team'>Our Team</div></Link>
<Link to='/contact'><div className='contact1'>Contact</div></Link>
<div className='location'>Location</div>

<div className='location1'>278,Ambikapuri Main Indore</div>
<div className='location2'><img src={mobile} width='10px'></img></div>
        <div className='mobile'>9540424976</div>  
        <div className='right'>© 2021. All Rights Reserved.</div>
          </div>
        
     
        </div>
    )
}

export default Footer
