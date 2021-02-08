import React from 'react';
import './Premium3.css';
import scratch_plan from '../image/scratch_plan.png';
import code_org from '../image/code_org.png'
import rupee from '../image/rupee-sign-solid.svg';

function Courseplan(props) {
    return (
        <div className='course_basic33'>
            <p className='basic_plan33'>{props.plan}</p>
            <p className='funda_plan33'>{props.plan_detail}</p>
            <p className='topic_covered33'>TOPICS LEARNED</p>
            <p className='topic_exp33'>
            {props.plan_topic}
            </p>
            <p className='tool_use33'>TOOLS USED</p>
            <p className='scratch_course33'><img className='border_scratch33'src={scratch_plan}></img></p>
            <p className='scratch_prog33'>Scratch</p>
            <p className='code_org33'><img className='codeorg_logo33' src={code_org}></img></p>
            <p className='codeorg33'>Code.org</p>
            <p className='projects33'>PROJECTS</p>
        <p className='project_plan33'>{props.project_detail}</p>
        <p className='course_money33'>{props.price}</p>
        <p className='rpe33'><img src={rupee} className='ruppe_sign33'></img></p>
        <p>{props.classes} Classes                 <img src={rupee} className='r_s33'></img>399 per session</p>
        <button className='btn_join33'>Join Now</button>
        </div>
    )
}

export default Courseplan
