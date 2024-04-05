import React from 'react'
import Link from 'next/link'
import "./menu.css"

const Menu = ({isMenuOpen, setIsMenuOpen}) => {
   const handleOpen=()=>{
    setIsMenuOpen(!isMenuOpen);
   }
  return (
    <div  className={'menu2 ' + (isMenuOpen && 'active')}>
          <ul>
                <li onClick={handleOpen}><button>X</button></li>
                <li onClick={handleOpen} ><Link href="/">Home</Link></li>
                <li onClick={handleOpen} ><Link href="/Courses">Courses</Link></li>
                <li onClick={handleOpen} ><Link href="/About">About</Link></li>
                <li onClick={handleOpen} ><Link href="/Contact">Contact</Link></li>
          </ul>
    </div>
  )
}

export default Menu