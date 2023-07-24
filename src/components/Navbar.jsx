import React, {useState} from 'react';
import '../styles/Navbar.css';
import {GrArchlinux} from 'react-icons/gr'

export const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <GrArchlinux /> Ali
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          Menu
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
           <li>About</li>
           <li>Projects</li>
           <li>Contact</li>
           <li>Resume</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

