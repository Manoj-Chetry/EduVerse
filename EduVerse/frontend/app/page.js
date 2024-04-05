"use client"
import Footer from '@/Components/Footer/Footer';
import Navbar from '@/Components/Navbar/Navbar';
import Slider from '@/Components/Slider/Slider';
import Menu from "@/Components/Menu/Menu";
import React, { useState } from 'react'
import style from "./home.module.css"


const page = () => {
 
  return (
    <>
      <Slider />
      <main>
        <div className={style.courses}>
          <h1 id='header'>What do you want to learn?</h1>
          <div className={style.coursetags}>
            <div className={style.tags}>IT</div>
            <div className={style.tags}>Web</div>
            <div className={style.tags}>Agriculture</div>
            <div className={style.tags}>Music</div>
            <div className={style.tags}>Design</div>
            <div className={style.tags}>Fashion</div>
            <div className={style.tags}>Accounting</div>
          </div>
        </div>

        <div id="hero">
          
        </div>
      </main>
      <Footer />
    </>
  )
}

export default page