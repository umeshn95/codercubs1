import React from 'react';
import './Courseplan_standard.css';
import scratch_plan from '../image/scratch_plan.png';
import code_org from '../image/code_org.png'
import rupee from '../image/rupee-sign-solid.svg';
import App_lab from '../image/App_lab.png';
import thunkable from '../image/thunkable.png';
import ltmh from'../image/html_css.png';
import vscode from '../image/vs_code.png';
import rect from '../image/react_img.png'

function Courseplanstandard(props) {
    return (
        <div className='course_basic1'>
            <p className='basic_plan1'>{props.plan}</p>
            <p className='funda_plan1'>{props.plan_detail}</p>
            <p className='topic_covered1'>TOPICS LEARNED</p>
            <p className='topic_exp1'>
            {props.plan_topic}
            </p>
            <p className='tool_use1'>TOOL & LANGUAGE</p>
            <p className='scratch_course1'><img className='border_scratch1'src={vscode}></img></p>
            <p className='App_l'><img className='App_lab'src={rect}></img></p>
            <p className='App_lab_text'>React</p>
           
           
            <p className='scratch_prog1'>VS Code</p>
            <p className='code_org1'><img className='codeorg_logo1' src={ltmh}></img></p>
            <p className='codeorg1'>Html & CSS</p>
            <p className='projects1'>PROJECTS</p>
        <p className='project_plan1'>{props.project_detail}</p>
        <p className='course_money1'>{props.price}</p>
        <p className='rpe1'><img src={rupee} className='ruppe_sign1'></img></p>
        <p>{props.classes} Classes                 <img src={rupee} className='r_s1'></img>399 per session</p>
        <button className='btn_join1'>Join Now</button>
        </div>
    )
}

export default Courseplanstandard
