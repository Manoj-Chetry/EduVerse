"use client";
import React, { useState } from "react";
import "./login.css";
import Link from "next/link";

const page = () => {
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [contactValid, setContactValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const handleLogin = () => {
    validateContact(contact);
    validatePassword(password);
  };

  const validatePassword=(password)=>{
    (password.length<8)?setPasswordValid(false):setPasswordValid(true);
  }

  const validateContact = (contact) => {
    const num = Number(contact);
    const regX = /^\d{10}$/;
    regX.test(num) ? setContactValid(true) : setContactValid(false);
  };

  return (
    <div id="main">
      <h1 className="header">Login</h1>
      <div className="error">
        <p>
          {contactValid
            ? "Validated"
            : "Please Enter a valid(10 digit) contact-number"}
           <br/>
            {passwordValid? "Password validated":"Password must be of 8 characters"}
        </p>
      </div>
      <div id="form">
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

        <button id="submit" onClick={handleLogin}>
          Login
        </button>

        <div className="signup-link">
          Don't Have An Account?
          <Link href={"/Signup"}>SignUp</Link>
        </div>
      </div>
    </div>
  );
};

export default page;
