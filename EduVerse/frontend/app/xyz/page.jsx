"use client";
import React, { useEffect, useState } from "react";
import "./signup.css";

let validator = require("email-validator");

const signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [c_password, setC_password] = useState("");
  const [contact, setContact] = useState("");

  const [p, setP] = useState("Please Enter a valid(10 digit) contact-number");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [btn, setBtn] = useState("Send OTP");
  const [otpmsg, setOtpmsg] = useState("");
  const [contactValid, setContactValid] = useState(false); //state for valid contact
  const [passwordValid, setPasswordValid] = useState(false); //state for valid password
  const [emailValid, setEmailValid] = useState(false);

  //    To check if the contact number is verified or not
  const [verify, setVerify] = useState(false);

  const handleSignup = () => {
    validatePassword(password);
  };

  
  const handleSendotp=()=> {
      if(emailValid){
        setOtpmsg("An OTP has been sent to your email id");
        setIsOtpSent(true);
      }
      else{
        setOtpmsg("Please enter a valid Email id");
        setIsOtpSent(false);
      }
    };
    
    const validatePassword = (password) => {
      //Checks length of password is less than 8 or not
      password.length < 8 ? setPasswordValid(false) : setPasswordValid(true);
    };
  


    const validateContact = (contact) => {
      //Checks the contact number to be 10 digits or not
    const num = Number(contact);
    const regX = /^\d{9}$/;
    regX.test(num) ? setContactValid(true) : setContactValid(false);
  };

  useEffect(() => {
    validateContact(contact);
    if (contactValid) {
      setP("");
    }
  }, [contact]);

  useEffect(()=>{
    if(isOtpSent){
        setBtn("Resend OTP");
    }
  },[isOtpSent])

  useEffect(()=>{
    if(validator.validate(email)){
      setEmailValid(true);
    }
    
  },[email])

  return (
    <>
      <div id="main">
        <h1 className="header">Sign Up</h1>
        <div className="error">
          <p>
            {p}
            <br />
            {passwordValid
              ? "Password validated"
              : "Password must be of 8 characters"}
          </p>
        </div>
        <div id="form">
          <div className="input-name input">
            <input
              type="text"
              className="field"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="input-email input">
            <input
              type="email"
              className="field"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button id="verify" onClick={handleSendotp}>
              {btn}
            </button>
          </div>
          <div className="error">
            <p>{otpmsg}</p>
          </div>
          <div className="input-otp input">
            <input
              type="text"
              className="field"
              placeholder="Enter the OTP"
              required
            />
          </div>
          <div className="input-contact input">
            <input
              type="tel"
              className="field"
              placeholder="Enter your Phone Number"
              required
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          
          <div className="input-pswd input">
            <input
              type="password"
              className="field"
              placeholder="Enter Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="error">
            <p>{password != c_password ? "Passwords donot match" : "Match"}</p>
          </div>
          <div className="input-c_pswd input">
            <input
              type="password"
              className="field"
              placeholder="Confirm Password"
              required
              value={c_password}
              onChange={(e) => setC_password(e.target.value)}
            />
          </div>
          <div className="input-school input">
            <input
              type="text"
              className="field"
              placeholder="Enter your School Name"
              required
            />
          </div>
          <div className="input-name input">
            <input type="file" className="field" required />
          </div>

          <button id="submit" onClick={handleSignup}>
            Sign-Up
          </button>
        </div>
      </div>
    </>
  );
};

export default signup;
