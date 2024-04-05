"use client"
import React, { useEffect, useState } from 'react'
import "./otp.css"

const Otp = ({email, handleVerify}) => {

    const [sec,setSec] = useState(60);
    useEffect(()=>{
        sec>0&&setTimeout(()=>setSec(sec-1),1000);
    }, [sec])
  return (
    <div className='container'>
        <h4>An OTP has been sent to your mail {email}</h4>
        <div id="main">
          <label htmlFor='otp'>Enter your OTP</label>
         <input id='otp' type="text" required placeholder='XXXX' autoComplete='true'/>
         <button onClick={handleVerify}>Verify</button>
         <div className="counter">Resend Otp after {sec}s</div>
         {(sec===0)?<button id="resend">Resend OTP</button>:""}
        </div>
    </div>
  )
}

export default Otp