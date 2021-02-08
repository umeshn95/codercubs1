import React from 'react';
import './Basic2.css';
import scratch_plan from '../image/scratch_plan.png';
import code_org from '../image/code_org.png'
import rupee from '../image/rupee-sign-solid.svg';

function Courseplan(props) {
    return (
        <div className='course_basic12'>
            <p className='basic_plan12'>{props.plan}</p>
            <p className='funda_plan12'>{props.plan_detail}</p>
            <p className='topic_covered12'>TOPICS LEARNED</p>
            <p className='topic_exp12'>
            {props.plan_topic}
            </p>
            <p className='tool_use12'>TOOLS USED</p>
            <p className='scratch_course12'><img className='border_scratch12'src={scratch_plan}></img></p>
            <p className='scratch_prog12'>Scratch</p>
            <p className='code_org12'><img className='codeorg_logo12' src={code_org}></img></p>
            <p className='codeorg12'>Code.org</p>
            <p className='projects'>PROJECTS</p>
        <p className='project_plan12'>{props.project_detail}</p>
        <p className='course_money12'>{props.price}</p>
        <p className='rpe12'><img src={rupee} className='ruppe_sign12'></img></p>
        <p>{props.classes} Classes                 <img src={rupee} className='r_s12'></img>399 per session</p>
        <button className='btn_join12'>Join Now</button>
        </div>
    )
}

export default Courseplan
