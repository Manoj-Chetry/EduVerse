import React from 'react'
import { RiUserFill } from "@remixicon/react";
import "./navbar.css"

const Navbar = () => {
  return (
    <nav>
        <div id="hamburger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
        <h1 id="logo">EduVerse</h1>
        <div className="">
        <RiUserFill
            size={25} // set custom `width` and `height`// set `fill` color
            className="user-icon" // add custom class name
        />
        </div>
        
    </nav>
  )
}

export default Navbar