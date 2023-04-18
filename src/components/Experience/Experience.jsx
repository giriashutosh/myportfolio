import React, {useContext} from 'react'
import './Experience.css'
import { themeContext } from "../../Context";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
    return (
        <div className='experience' id = 'experience'>
            <div className='achievement'>
                <div className='circle' style={{color: darkMode?'var(--orange)':''}}>4+</div>
                <span style={{color: darkMode?'white':''}}>Years</span>
                <span>Experience</span>
            </div>
            <div className='achievement'>
                <div className='circle' style={{color: darkMode?'var(--orange)':''}}>6+</div>
                <span style={{color: darkMode?'white':''}}>Projects</span>
                <span>Completed</span>
            </div>
            <div className='achievement'>
                <div className='circle' style={{color: darkMode?'var(--orange)':''}}>1</div>
                <span style={{color: darkMode?'white':''}}>Company</span>
                <span>Work</span>
            </div>
        </div>
    
  )
}

export default Experience
