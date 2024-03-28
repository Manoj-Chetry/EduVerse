import React from 'react'
import Link from 'next/link'
import "./footer.css"

const Footer = () => {
  return (
    <footer id='footer'>
        <div id="link-container">
            <Link className='links' href="/Login">Login</Link>
            <Link className='links' href="/Contact">Home</Link>
            <Link className='links' href="/Contact">Courses</Link>
            <Link className='links' href="/Contact">Courses</Link>
            <Link className='links' href="/Contact">About</Link>
            <Link className='links' href="/Contact">Contact</Link>
        </div>
    </footer>
  )
}

export default Footer