import React from 'react'
import { RiUserFill } from "@remixicon/react";
import "./navbar.css"
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
        <div id="hamburger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
        <div id="nav-container">
          <Link href="/" className="nav-items">Home</Link>
          <Link href="/Courses" className="nav-items">Courses</Link>
          <Link href="/About" className="nav-items">About</Link>
          <Link href="/Contact" className="nav-items">Contact</Link>
        </div>
        <h1 id="logo">EduVerse</h1>
        <div className="">
        <RiUserFill
            size={25} 
            className="user-icon" // add custom class name
        />
        </div>
        
    </nav>
  )
}

export default Navbar