import './navbar.css'
export const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Ashutosh</div>
                <span>toggle</span>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType: "none"}}>
                        <li>Home</li>
                        <li>Projects</li>
                        <li>Experience</li>
                        <li>Portfolio</li>
                    </ul>
                </div>
                <button className="button n-button">Contact</button>
            </div>
        </div>
    )
}