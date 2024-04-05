"use client"
import "./sign.css";
import React, { useState } from 'react'
import Link from 'next/link'
import Email from "@/Components/Email/Email";
import Otp from "@/Components/Otp/Otp";
import Payment from "@/Components/Payment/Payment";
import Form from "@/Components/Form/Form";

let EmailValidator = require("email-validator");

const Signup = () => {
  // State to manage the inputs
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [pswd, setPswd] = useState("");
  const [c_pswd, setC_pswd] = useState("");
  const [component, setComponent] = useState("Email")
  const [msg, setMsg] = useState("");
  const [verify, setVerify] = useState(false);

  const validateEmail = ()=>{
    (EmailValidator.validate(email))?setComponent("Otp"):setMsg("Invalid Email!Please enter a valid Email Id.");
  }

  const handleVerify=()=>{
    setVerify(true);
    setComponent("Payment");
  }

  const handlePayment=()=>{
    setComponent("Form");
  }

  return (
    <main>
        <h1>SIGN UP</h1>
        <div className="form">
          {(component=="Email")&&<Email email={email} setEmail={setEmail} handleSendOtp={validateEmail} error={msg}/>}
          {(component=="Otp"&&<Otp email={email} handleVerify={handleVerify}/>  )}
          {(component=="Payment"&&<Payment handlePayment={handlePayment}/>)}
          {(component=="Form"&&<Form />  )}
        </div>
        <p id="redirect">Already have an account? <Link href="/Login">Login</Link></p>
    </main>
  )
}

export default Signup