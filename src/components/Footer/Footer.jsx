import React from 'react'
import './Footer.css'
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";
const Footer = () => {
  return (
    <div className='footer'>
          <img src={Wave} alt='' style={{ width: "100%" }}/>
          <div className='f-content'>
             <span>ashutoshgiri249@gmail.com</span>
        <div className='f-icons'>
          <Insta />
          <Facebook />
          <Github />
              </div>
          </div>
    </div>
  )
}

export default Footer
