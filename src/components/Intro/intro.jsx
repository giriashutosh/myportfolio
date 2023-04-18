import React, { useContext } from "react";
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
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" }

  //context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro" id="Intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Ashutosh Giri</span>
          <span>
            Software Developer with high level of experience in web designing
            and development in React and 3D-Modelling, FEA Software, DSA, System Design, producing the Quality work
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire Me</button>
        </Link>

        <div className="i-icons ">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
        </div>
      </div>

      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji} alt="" />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition} className="floating-div"
        >
          <FloatingDiv img={crown} txt1="Web" txt2="Developer" />
        </motion.div>
        <motion.div initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv img={thumbup} txt1="Best" txt2="DSA Solving Award" />
        </motion.div>

        {/* blur */}
        <div style={{ background: "rgb(238 210 255)" }} className="blur"></div>
        <div className="blur" style={{ background: '#C1F5FF', top: '15rem', left: '-9rem', width: '21rem', height: '14rem' }}></div>
      </div>
    </div>
  );
};

export default Intro;
