import React from "react";
import "./UpiPayment.css";

export default function UpiPayment() {

  const upiId = "andhra@upi"; // உங்கள் UPI ID change பண்ணலாம்
  const amount = 800;
  const name = "Fireworks Store";

  const upiLink = `upi://pay?pa=${upiId}&pn=${name}&am=${amount}&cu=INR`;

  return (
    <div className="upi-container">

      <div className="upi-box">
        <h2>Complete Payment</h2>

        <h3>Scan QR to Pay</h3>

        {/* QR CODE */}
        <img 
          src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${upiLink}`} 
          alt="UPI QR"
        />

        <p>UPI ID: <b>{upiId}</b></p>
        <h2>Total Amount: ₹{amount}</h2>

        <a href={upiLink} className="pay-btn">
          Pay with UPI App
        </a>

      </div>

    </div>
  );
}
