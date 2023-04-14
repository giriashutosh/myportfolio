import React from 'react'
import './Project.css'
import Card from '../Card/Card'
import HeartEmoji from '../../img/heartemoji.png'

const Project = () => {
  return (
    <div className='project'>
      <div className='awesome'>
        <span>My Awesome</span>
        <span>Projects</span>
        <span>Build some React Projects for learning pupose, go and checkout these projects<br/>
        <br/>using some libraries of react</span>
        <buttom className='button p-button'>Download CV</buttom>
        <div className='blur p-blur' style={{background: '#ABF1FF94'}}></div>
      </div>
      <div className='cards'>
        <Card emoji = {HeartEmoji} heading = {'Design'} detail = {"Figma, Sketch, Photoshop, Adobe"}/>
      </div>
    </div>
  )
}

export default Project
