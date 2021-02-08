import React,{useState,useEffect} from 'react';
import kid from '../video/blur videu.mp4'
import './Home.css';
import teaching from '../image/teaching_principle.png';
import ourcourses from '../image/our_courses_app.png';
import scratch from '../image/scratch_course.png';
import ourstudent from '../image/student_work.png';
import Footer from './Footer';
import teacher_led_ins from '../image/teacher_led_inst.png';
import project_based_learning from '../image/project_based_learning.png';
import small_group_class from '../image/small_group.png';
import emptydiv from '../image/emptydiv.png';
import increase from '../image/increase_thinking.png'
import Courseplan from './Courseplan_basic';
import Courseplanstandard from './Courseplan_standard';
import Premium1 from './Premium1';

import classes_1 from '../image/classes1to5.png'
import classes_6 from '../image/classes6to10.png';
import classes_11 from '../image/classes11to12.png';
import kid_learn_pic from '../image/kid_learning_pic.png'
import Testimonial from './Testimonial';





function Home() {
   const [tea,setTea]= useState(false);
   const [proj,setProj] = useState(false);
   const [smal,setSmal] = useState(false);
const [plan1,setPlan1]= useState(0);

 const plan=[classes_1,classes_6,classes_11]
function handleClasses(){
    setPlan1(1)
    

}
function handleClasses1(){
    setPlan1(0)
}
function handleClasses11(){
    setPlan1(2)
}


   window.addEventListener('scroll', () => {
    if(window.scrollY>=300){
        setTea(true)

    }else{
        setTea(false)
    }

    if(window.scrollY>=360){
        setProj(true)

    }else{
        setProj(false)
    }

    if(window.scrollY>=420){
        setSmal(true)

    }else{
        setSmal(false)
    }




})
    return (
        
        <div>
            <button className='btn_joinb'>Join Now</button>
            <button className='btn_joins'>Join Now</button>
            <button className='btn_joinp'>Join Now</button>
        <div className='kid'>
            <video className='kid' playsInline loop autoPlay muted src={kid}></video>
<div className='cfk'><span className='coding_color1'>C</span><span className='coding_color2'>O</span><span className='coding_color3'>D</span><span className='coding_color4'>I</span><span className='coding_color5'>N</span><span className='coding_color6'>G</span> <span className='coding_color7'>F</span><span className='coding_color8'>O</span><span className='coding_color9'>R</span> <span className='coding_color10'>K</span><span className='coding_color11'>I</span><span className='coding_color12'>D</span><span className='coding_color13'>S</span> </div>
<div className='lci'>LEARN CREATE INNOVATE </div>
<div className='wtc'>From building Mobile App to Website, the choice is yours,<br></br>Apply your learning with real-world projects,Learn everything you need to take your skills to the next level. </div>
<div className='get'><button className=''>Get Started</button></div>
<div className='emptydiv_child'><img src={emptydiv}></img></div>
<div className='emptydiv_future'><img src={emptydiv}></img></div>
<div className='future_ready'>Our <span className='coding_color1'>Childs </span>Are <span className='coding_color2'>Future </span>& <span className='coding_color1'>Future</span> is <span className='coding_color2'>Coding</span></div>
<div className='job'>There are over half a million computer programming jobs in the US and the UK, <br></br>and those sectors are projected to continue to grow by 20% over the next ten years.</div>
<div className='increase_thinking'><img src={increase}></img></div>
<div className='our_courses'>Our <span className='coding_color1'>Courses</span> For <span className='coding_color2'>Students</span></div>
<div className='emptydiv_course'><img src={emptydiv}></img></div>
<div className='courses_basic'>
                
                
                <img className='classes1to5' src={plan[plan1]}></img></div>

<div className='emptydiv_courses'><img src={emptydiv}></img></div><div className='class_description'></div>
<button className='b_15'  onClick={handleClasses1}>CLASSES 1-5</button>
<div className='button_610'></div>
<button className='b_1112' onClick={handleClasses11}>CLASSES 11-12</button>

{/* <div><img className="" src={teaching}/></div>
<div><img class="" src={ourcourses}/></div>
<div><img class="" src={scratch}/></div>
<div><img class="" src={ourstudent}/></div> */}
{/* <div className='explore'><button className='explore_course'>Explore the course</button></div>
<div className='explore1'><button className='explore_course1'>Explore the course</button></div>
<div className={tea?'teacher_led':''}><img className='' src={teacher_led_ins}></img></div>
<div className={proj?'project_based_learn':''}><img className='' src={project_based_learning}></img></div>
<div className={smal?'small_group_class':''}><img src={small_group_class}></img></div>
<div className='Everyone'>Everyone Should Learn Coding.</div>
<iframe width="761" height="428" src="https://www.youtube.com/embed/IY7EsTnUSxY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

        </div>
        <button className='b_610' onClick={handleClasses}>CLASSES 6-10</button>
        <div className='e_div1'><img src={emptydiv}></img></div>
        <div className='kid_learn_div'><img className='kid_learn_pic' src={kid_learn_pic}></img></div>
<Testimonial></Testimonial>
      
        </div>
    )
}

export default Home
