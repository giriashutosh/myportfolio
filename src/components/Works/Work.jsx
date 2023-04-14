import React from 'react'
import './Work.css'
import Techonsoft from '../../img/technosoft.jpg'
import Greenleaf from '../../img/greenleaf.jpg'
import Renov8Studio from '../img/renov8studio.jpg'
const Work = () => {
    return (
        <div className='work'>
            <div className='awesome'>
                <span>Work for All these</span>
                <span>Clients</span>
                <span>Build an e-commerce web application for a local-vendor,
                    working on Interior design web application
                    <br />Build some 3d-models for Tank Storage software,
                    Automate the Tank storage software and FEA.
                </span>
                <button className='button w-button'>Hire Me</button>
                <div className='blur p-blur' style={{ background: '#ABF1FF94' }}></div>
            </div>
            <div className='w-right'>
                <div className='w-mainCircle'>
                    <div className='w-secCircle'>
                        <img src = {Techonsoft} alt = ''/>
                    </div>
                    <div className='w-secCircle'>
                    <img src = {Greenleaf} alt = ''/>
                    </div>
                    <div className='w-secCircle'>
                    <img src = {Renov8Studio} alt = ''/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work
