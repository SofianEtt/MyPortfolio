import React from 'react'
import './Navbar.css'
import githubLogo from '/home/sofia/Documents/React/Portofolio/myporto/src/assets/GitHub_Logo.png'
const Navbar = () =>{
    return (
        <div className='navbar'>
            <ul className="nav-menu">
                <li>Home</li>
                <li>About</li>
                <li>Resume</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
            <img className='githubLogo'src={githubLogo} alt=''/>
        </div>
    )
}
export default Navbar