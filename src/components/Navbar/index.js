import React from 'react'
import NavIcon from '../../images/Nav-Icon.png'

const Navbar = () => {
  return (
    <nav>
      <div className="landing-nav">
        <a href="#landing">
          <img className="nav-icon" src={NavIcon} />
        </a>
      </div>
      <div className="landing-nav-mobile">
        <a href="#landing">
          <img className="nav-icon" src={NavIcon} />
        </a>
      </div>
      <ul>
        <li className="about-nav">
          <a href="#about">About Me</a>
        </li>
        <li className="projects-nav">
          <a href="#projects">Projects</a>
        </li>
        <li className="contact-nav">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
