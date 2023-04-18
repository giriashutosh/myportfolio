import React, { useContext } from 'react'
import './Project.css'
import Card from '../Card/Card'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Resume from './AshutoshGiri-CV.pdf'
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
const Project = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className='project' id="project">
      <div className='awesome'>
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Projects</span>
        <span>Build some React Projects for learning purpose, go and checkout these projects
          <br />using some libraries of react</span>
        {/* <a href={Resume} download style={{background: 'black'}}><button className='button p-button' >Download CV</button></a> */}
        <a href={Resume} download><button className='button p-button' >Download CV</button></a>
        <div className='blur p-blur' style={{ background: '#ABF1FF94' }}></div>
      </div>
      
      <div className='cards'>
        {/* First card */}
        <motion.div initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}>
          <Card emoji={HeartEmoji} heading={'Design'} detail={"Figma, Sketch, Photoshop, Adobe"} />
        </motion.div>
        {/* sceond card */}
        <motion.div initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}>
          <Card emoji={Glasses} heading={'Developer'} detail={"HTML, CSS, JavaScript, React, DSA, Java, System Design"} />
        </motion.div>
        {/* third card */}
        <motion.div initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}>
          <Card emoji={Humble} heading={'FEA Design'} detail={"Adaptive Modelling Language, Finite Element Analysis, Automate Tank Storage Softwares"} />
        </motion.div>
        <div
          className="blur c-blur"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  )
}

export default Project
