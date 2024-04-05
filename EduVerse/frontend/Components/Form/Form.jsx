import React from 'react'
import './form.css'

const Form = () => {
  return (
    <div className="container">
        <h4>Please fill up the form {"test@email.com"}</h4>
        <div id="main">
          <input type="text" id="name" required autoComplete='true' placeholder='Enter your name'/>
          <input type="text" id="contact" required autoComplete='true' placeholder='Enter your phone number'/>
          <select name="school" id="school" required>
            <option value="">Select Your School</option>
            <option value="DBHS">DBHS</option>
            <option value="VKV">VKV</option>
            <option value="JNV">JNV</option>
            <option value="KV">KV</option>
          </select><p>OR Enter a school</p>
          <input type="text" name="school" required autoComplete='true' placeholder='Enter your School Name'/>
          <input type="password" id="password" required autoComplete='true' placeholder='Password'/>
          <input type="password" id="c_pswd" required autoComplete='true' placeholder='Confirm Password'/>
          <button>Sign Up</button>
        </div>
    </div>
  )
}

export default Form