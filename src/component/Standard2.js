import React from 'react';
import './Standard2.css';
import scratch_plan from '../image/scratch_plan.png';
import code_org from '../image/code_org.png'
import rupee from '../image/rupee-sign-solid.svg';

function Courseplan(props) {
    return (
        <div className='course_basic22'>
            <p className='basic_plan22'>{props.plan}</p>
            <p className='funda_plan22'>{props.plan_detail}</p>
            <p className='topic_covered22'>TOPICS LEARNED</p>
            <p className='topic_exp22'>
            {props.plan_topic}
            </p>
            <p className='tool_use22'>TOOLS USED</p>
            <p className='scratch_course22'><img className='border_scratch22'src={scratch_plan}></img></p>
            <p className='scratch_prog22'>Scratch</p>
            <p className='code_org22'><img className='codeorg_logo22' src={code_org}></img></p>
            <p className='codeorg22'>Code.org</p>
            <p className='projects22'>PROJECTS</p>
        <p className='project_plan22'>{props.project_detail}</p>
        <p className='course_money22'>{props.price}</p>
        <p className='rpe22'><img src={rupee} className='ruppe_sign22'></img></p>
        <p>{props.classes} Classes                 <img src={rupee} className='r_s'></img>399 per session</p>
        <button className='btn_join22'>Join Now</button>
        </div>
    )
}

export default Courseplan
