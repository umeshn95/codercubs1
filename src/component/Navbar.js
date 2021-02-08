import React,{useState} from 'react';
import './Navbar.css'
// import logo from '../image/logoloop.PNG';
import { Link } from 'react-router-dom';
import courses from '../image/courses_popup.png';
import na from '../image/notch.png';
import ind from '../image/icons8-india-100.png'

import ReactFlagsSelect from 'react-flags-select';
import { Us } from 'react-flags-select';


function Navbar() {
    const [nav,setNav]=useState(false);
    const [cou,setCou]=useState(false);
    const [abt,setAbt] = useState(false)
    const [mnt,setMnt] = useState(false)
    const [cnt,setCnt] = useState(false)
    const [hnt,setHnt] = useState(false)
    const [selected, setSelected] = useState('');
    window.addEventListener('scroll', () => {
       if(window.scrollY>=80){
           setNav(true)

       }else{
           setNav(false)
       }
       if(window.scrollY>=80){
        setCou(true)

    }else{
        setCou(false)
    }
    if(window.scrollY>=80){
        setAbt(true)

    }else{
        setAbt(false)
    }
    
    if(window.scrollY>=80){
        setMnt(true)

    }else{
        setMnt(false)
    }

    if(window.scrollY>=80){
        setCnt(true)

    }else{
        setCnt(false)
    }

    if(window.scrollY>=80){
        setHnt(true)

    }else{
        setHnt(false)
    }

      })

    return (
        <div className='navbar'>
            
            <div className={nav?'newnavbar':'navbar'}></div>
<Link to='/'><div className='codercubs' ><span className='C_color'>C</span><span className='o_color'>o</span><span className='d_color'>d</span><span className='e_color'>e</span><span className='r_color'>r</span><span className='c_color'>c</span><span className='u_color'>u</span><span className='b_color'>b</span><span className='s_color'>s</span></div> 
{/* 
<div className='logo'><img src={}></img></div> */}
</Link>               
                
<Link to='/home'><div className={hnt?'hometooltip1':'hometooltip'}>Home</div></Link>
<Link to='/aboutus'><div className={abt?'abouttooltip':'abouttooltip1'}>About<span className='tooltiptext1'>About Us <hr></hr><p className='scratch_color'>Our Story</p> 
<hr></hr><p className='career_color'>Contact US</p> </span></div></Link>
<Link to='/mentor'><div className={mnt?'mentortooltip':'mentortooltip1'}>Our Mentors<span className='tooltiptext2'>Our Teaching Principle<hr></hr><p className='scratch_color'>Our Team</p></span></div></Link>
<Link to='/courses'><div className={cou?'tooltip1':'tooltip'}>Courses<Link to='/mentor'> <span class="tooltiptext">App Development For Kids <hr></hr><p className='scratch_color'>Scratch Programming For Kids</p><hr></hr><p className='career_color'>Career Counselling For Everyone</p> </span></Link></div></Link>
<Link to='/contact'><div className={cnt?'contacttooltip':'contacttooltip1'}>Contact</div></Link>

<div className='region'><ReactFlagsSelect
    countries={["IN","US", "AU", "SA"]}
        selected={selected}
        onSelect={code => setSelected(code)}
        fullWidth={false}
        selectButtonClassName="region1"
      /></div>
    
        </div>


    )
}

export default Navbar
