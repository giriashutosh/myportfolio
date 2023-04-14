import React from 'react'
import './Project.css'
import Card from '../Card/Card'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Resume from './AshutoshGiri-CV.pdf'

const Project = () => {
  
  return (
    <div className='project'>
      <div className='awesome'>
        <span>My Awesome</span>
        <span>Projects</span>
        <span>Build some React Projects for learning purpose, go and checkout these projects
        <br/>using some libraries of react</span>
        {/* <a href={Resume} download ><button className='button p-button' >Download CV</button></a> */}
        <button className='button p-button' >Download CV</button>
        <div className='blur p-blur' style={{background: '#ABF1FF94'}}></div>
      </div>
      <div className='cards'>
        {/* First card */}
        <div style={{left: '14rem'}}>
        <Card emoji = {HeartEmoji} heading = {'Design'} detail = {"Figma, Sketch, Photoshop, Adobe"}/>
        </div>
        {/* sceond card */}
        <div style={{top: '12rem', left: '-4rem'}}>
        <Card emoji = {Glasses} heading = {'Developer'} detail = {"HTML, CSS, JavaScript, React, DSA, Java, System Design"}/>
        </div>
         {/* third card */}
         <div style={{top: '20rem', left: '14rem'}}>
        <Card emoji = {Humble} heading = {'FEA Design'} detail = {"Adaptive Modelling Language, Finite Element Analysis, Automate Tank Storage Softwares"}/>
        </div>
        <div
          className="blur c-blur"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  )
}

export default Project
