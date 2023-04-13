import React from "react";
import "./intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am</span>
          <span>Ashutosh Giri</span>
          <span>
            Software Developer with high level of experience in web designing
            and development in React and 3D-Modelling, FEA Software, DSA, System
            Design, producting the Quality work
          </span>
        </div>
        <button className="button i-button">Hire Me</button>
        <div className="i-icons ">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
        </div>
      </div>

      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <img src={glassesimoji} alt="" />
        <div style={{ top: "-4%", left: "68%" }} className="floating-div">
          <FloatingDiv img={crown} txt1="Web" txt2="Developer" />
        </div>
        <div style={{ top: "18rem", left: "0rem" }} className="floating-div">
          <FloatingDiv img={thumbup} txt1="Best" txt2="DSA Solving Award" />
        </div>

        {/* blur */}
        <div style={{ background: "rgb(238 210 255)" }} className="blur"></div>
        <div className="blur" style={{background: '#C1F5FF', top: '15rem', left: '-9rem', width: '21rem', height: '14rem' }}></div>
      </div>
    </div>
  );
};

export default Intro;
