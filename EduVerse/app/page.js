"use client"
import Footer from '@/Components/Footer/Footer';
import Navbar from '@/Components/Navbar/Navbar';
import Slider from '@/Components/Slider/Slider';
import React, { useState } from 'react'


const page = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <main>
        <div className="courses">
          <h1 id='header'>What do you want to learn?</h1>
          <div className='course-tags'>
            <div className="tags">IT</div>
            <div className="tags">Web</div>
            <div className="tags">Agriculture</div>
            <div className="tags">Music</div>
            <div className="tags">Design</div>
            <div className="tags">Fashion</div>
            <div className="tags">Accounting</div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default page