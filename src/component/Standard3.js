import React from 'react';
import './Standard3.css';
import scratch_plan from '../image/scratch_plan.png';
import code_org from '../image/code_org.png'
import rupee from '../image/rupee-sign-solid.svg';

function Courseplan(props) {
    return (
        <div className='course_basic'>
            <p className='basic_plan23'>{props.plan}</p>
            <p className='funda_plan23'>{props.plan_detail}</p>
            <p className='topic_covered23'>TOPICS LEARNED</p>
            <p className='topic_exp23'>
            {props.plan_topic}
            </p>
            <p className='tool_use23'>TOOLS USED</p>
            <p className='scratch_course23'><img className='border_scratch23'src={scratch_plan}></img></p>
            <p className='scratch_prog23'>Scratch</p>
            <p className='code_org23'><img className='codeorg_logo23' src={code_org}></img></p>
            <p className='codeorg23'>Code.org</p>
            <p className='projects23'>PROJECTS</p>
        <p className='project_plan23'>{props.project_detail}</p>
        <p className='course_money23'>{props.price}</p>
        <p className='rpe23'><img src={rupee} className='ruppe_sign23'></img></p>
        <p>{props.classes} Classes                 <img src={rupee} className='r_s23'></img>399 per session</p>
        <button className='btn_join23'>Join Now</button>
        </div>
    )
}

export default Courseplan
