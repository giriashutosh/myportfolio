import React, { useContext } from 'react'
import './Work.css'
import Techonsoft from '../../img/TechnoSoft1.png'
import Greenleaf from '../../img/GEL.jpg'
import Renov8Studio from '../../img/renov8Studio.jpg'
import Developer from '../../img/coder.png'
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from 'react-scroll'

const Work = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    function downloadFile() {
        const link = document.createElement('Link');
        link.to = 'contact';
        link.setAttribute('smooth', 'true');
        link.setAttribute('spy', 'true');
        document.body.appendChild(link);
        link.click();
      }
    return (
        <div className='work' id = 'works'>
            <div className='awesome'>
                <span style={{ color: darkMode ? "white" : "" }}>Work for All these</span>
                <span>Clients</span>
                <span>Build an e-commerce web application for a local-vendor,
                    working on Interior design web application
                    <br />Build some 3d-models for Tank Storage software,
                    Automate the Tank storage software and FEA.
                </span>
                {/* <Link to="contact" smooth={true} spy={true}> */}
                   <button className='button w-button' onClick={downloadFile}>Hire Me</button>
                {/* </Link> */}
                
                <div className='blur w-blur' style={{ background: '#ABF1FF94' }}></div>
            </div>
            
            <div className='w-right'>
                <motion.div initial={{ rotate: 45 }}
                         whileInView={{ rotate: 0 }}
                     viewport={{ margin: "-40px" }}
                    transition={{ duration: 3.5, type: "spring" }}
                    className='w-mainCircle'
                >
                    <div className='w-secCircle'>
                        <img src={Techonsoft} alt='' />
                    </div>
                    <div className='w-secCircle'>
                        <img src={Greenleaf} alt='' />
                    </div>
                    <div className='w-secCircle'>
                        <img src={Renov8Studio} alt='' />
                    </div>
                    <div className='w-secCircle'>
                        <img src={Developer} alt='' />
                    </div>
                </motion.div>
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    )
}

export default Work
