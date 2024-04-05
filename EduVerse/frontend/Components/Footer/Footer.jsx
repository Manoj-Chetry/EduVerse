import React from 'react'
import Link from 'next/link'
import "./footer.css"

const Footer = () => {
  return (
    <footer id='footer'>
        <div id="link-container">
            <Link className='links' href="/Login">Login</Link>
            <Link className='links' href="/Contact">Home</Link>
            <Link className='links' href="/Courses">Courses</Link>
            <Link className='links' href="/About">About</Link>
            <Link className='links' href="/Contact">Contact</Link>
        </div>
        <h1 id='logo-footer'>
        &#169; EduVerse
        </h1>
    </footer>
  )
}

export default Footer