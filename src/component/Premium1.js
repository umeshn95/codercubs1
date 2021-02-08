import React from 'react';
import './Premium1.css';
import scratch_plan from '../image/scratch_plan.png';
import code_org from '../image/code_org.png'
import rupee from '../image/rupee-sign-solid.svg';
import App_lab from '../image/App_lab.png';
import Game_lab from '../image/game_lab.png';
import thunkable from '../image/thunkable.png'
import js from '../image/js_img.png';
import ltmh from'../image/html_css.png';
import vscode from '../image/vs_code.png';
import rect from '../image/react_img.png';
import Node from '../image/nodejs_img.png'

function Premium1(props) {
    return (
        <div className='course_basic13'>
            <p className='basic_plan13'>{props.plan}</p>
            <p className='funda_plan13'>{props.plan_detail}</p>
            <p className='topic_covered13'>TOPICS LEARNED</p>
            <p className='topic_exp13'>
            {props.plan_topic}
            </p>
            <p className='tool_use13'>TOOL & LANGUAGE</p>
            <p className='scratch_course13'><img className='border_scratch13'src={Node}></img></p>
            <p className='scratch_prog13'>NodeJs</p>
            <p className='code_org13'><img className='codeorg_logo13' src={rect}></img></p>
            <p className='codeorg13'>ReactJs</p>
            <p className='App_l'><img className='App_lab'src={js}></img></p>
            <p className='App_lab_text'>Javascript</p>
            <p className='thunk1'><img className='thunk'src={vscode}></img></p>
            <p className='thunk_text'>VS Code</p>
            <p className='GameLab1'><img className='GameLab'src={ltmh}></img></p>
            <p className='GameLab_text'>Html & Css</p>
            <p className='projects13'>PROJECTS</p>
        <p className='project_plan13'>{props.project_detail}</p>
        <p className='course_money13'>{props.price}</p>
        <p className='rpe13'><img src={rupee} className='ruppe_sign13'></img></p>
        <p>{props.classes} Classes                 <img src={rupee} className='r_s13'></img>399 per session</p>
        <button className='btn_join13'>Join Now</button>
        </div>
    )
}

export default Premium1
