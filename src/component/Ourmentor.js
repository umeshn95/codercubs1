import React from 'react'
import Navbar from './Navbar'
import team from '../image/faculty1.png'
import Footer from './Footer'
function Ourmentor() {
    return (
        <div>
            <Navbar></Navbar>
            <div className='our_mentor'><img src={team}></img></div>
            <Footer></Footer>
        </div>
    )
}

export default Ourmentor
