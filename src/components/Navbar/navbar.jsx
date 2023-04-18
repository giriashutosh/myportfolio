import Toggle from '../Toggle/Toggle'
import './navbar.css'
import { Link } from 'react-scroll'
export const Navbar = () => {
    return (
        <div className="n-wrapper" id="Navbar">
            <div className="n-left">
                <div className="n-name">Ashutosh</div>
                <Toggle/>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: "none" }}>
                        <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                            <li>Home</li>
                        </Link>
                        <Link activeClass="active" to="project" spy={true} smooth={true}>
                          <li>Projects</li>
                        </Link>
                        <Link activeClass="active" to="experience" spy={true} smooth={true}>
                        <li>Experience</li>
                        </Link>
                        <Link activeClass="active" to="portfolio" spy={true} smooth={true}>
                        <li>Portfolio</li>
                        </Link>
                        
                    </ul>
                </div>
                <Link activeClass="active" to="contact" spy={true} smooth={true}>
                <button className="button n-button">Contact</button>
                </Link>
                
            </div>
        </div>
    )
}