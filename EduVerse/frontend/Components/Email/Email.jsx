import React from "react";
import "./email.css"

const email = ({email, setEmail, handleSendOtp, error}) => {

  return (
    <div className="container">
      <h4>Please Enter Your Email ID</h4>
      <div id="main">
        <p id='error'>{error}</p>
        <input id="email" type="email" autoComplete="true" placeholder="Email" required 
        value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <button onClick={handleSendOtp}>Send OTP</button>
      </div>
    </div>
  );
};

export default email;
