import React from 'react';
import './Courseplan.css';
import scratch_plan from '../image/scratch_plan.png';
import code_org from '../image/code_org.png'
import rupee from '../image/rupee-sign-solid.svg';
import ltmh from'../image/html_css.png';
import vscode from '../image/vs_code.png'


function Courseplan(props) {
    return (
        <div className='course_basic'>
            <p className='basic_plan'>{props.plan}</p>
            <p className='funda_plan'>{props.plan_detail}</p>
            <p className='topic_covered'>TOPICS LEARNED</p>
            <p className='topic_exp'>
            {props.plan_topic}
            </p>
            <p className='tool_use'>TOOL & LANGUAGE</p>
            <p className='scratch_course'><img className='border_scratch'src={vscode}></img></p>
            <p className='scratch_prog'>VS Code</p>
            <p className='code_org'><img className='codeorg_logo' src={ltmh}></img></p>
            <p className='codeorg'>Html & CSS</p>
            <p className='projects'>PROJECTS</p>
        <p className='project_plan'>{props.project_detail}</p>
        <p className='course_money'>{props.price}</p>
        <p className='rpe'><img src={rupee} className='ruppe_sign'></img></p>
        <p>{props.classes} Classes                 <img src={rupee} className='r_s'></img>399 per session</p>
        <button className='btn_join'>Join Now</button>
        </div>
    )
}

export default Courseplan
