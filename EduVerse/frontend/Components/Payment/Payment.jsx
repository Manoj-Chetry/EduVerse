import React from 'react'
import "./payment.css"

const Payment = ({handlePayment}) => {
  return (
    <div className="container">
        <h4>Pay The Amount</h4>
        <div id="main">
            <img src="" alt="QR code" />
            <p id='note'>Only After paying proceed to the next step.<br/>Screenshot the transaction for uploaing in the form</p>
            <button onClick={handlePayment}>Procced</button>
        </div>
    </div>
  )
}

export default Payment