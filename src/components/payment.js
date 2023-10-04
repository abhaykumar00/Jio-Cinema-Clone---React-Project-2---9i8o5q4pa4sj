import React, { useState } from "react";
import "../style/payment.css"; // Import your CSS file

function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentInfo, setPaymentInfo] = useState("");

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
    setPaymentInfo(""); // Reset payment info when the payment method changes
  };

  const handlePaymentInfoChange = (e) => {
    setPaymentInfo(e.target.value);
  };

  const renderPaymentForm = () => {
    switch (paymentMethod) {
      case "debit-card":
        return (
          <div className="payment-form">
            <div className="debit-card-images">
              <img src="/visa.png" alt="Visa" className="debit-card-image" />
              <img
                src="/mastercard.png"
                alt="MasterCard"
                className="debit-card-image"
              />
              <img src="/rupay.png" alt="RuPay" className="debit-card-image" />
            </div>
            <label className="payment-label">Debit Card Number:</label>
            <input
              type="text"
              value={paymentInfo}
              onChange={handlePaymentInfoChange}
              className="payment-input"
              placeholder="Enter ATM Number"
            />
            <label className="payment-label">ATM PIN:</label>
            <input
              type="password"
              value={paymentInfo}
              onChange={handlePaymentInfoChange}
              className="payment-input"
              placeholder="Enter PIN"
            />
            <label className="payment-label">Expiry Date:</label>
            <input
              type="text"
              value={paymentInfo}
              onChange={handlePaymentInfoChange}
              className="payment-input"
              placeholder="MM/YY"
            />
          </div>
        );
      case "upi":
        return (
          <div className="payment-form">
            <label className="payment-label">UPI ID:</label>
            <input
              type="text"
              value={paymentInfo}
              onChange={handlePaymentInfoChange}
              className="payment-input"
              placeholder="Enter UPI ID"
            />
          </div>
        );
      case "credit-card":
        return (
          <div className="payment-form">
            <label className="payment-label">Credit Card Number:</label>
            <input
              type="text"
              value={paymentInfo}
              onChange={handlePaymentInfoChange}
              className="payment-input"
            />
          </div>
        );
      case "netbanking":
        return (
          <div className="payment-form">
            <label className="payment-label">Net Banking ID:</label>
            <input
              type="text"
              value={paymentInfo}
              onChange={handlePaymentInfoChange}
              className="payment-input"
              placeholder="Enter NET Banking ID"
            />
            <label className="payment-label">Password:</label>
            <input
              type="password"
              value={paymentInfo}
              onChange={handlePaymentInfoChange}
              className="payment-input"
              placeholder="Enter Password"
            />
          </div>
        );
      default:
        return null; // No payment method selected
    }
  };

  return (
    <div className="payment-container">
      <h1 className="payment-title">Payment Page</h1>
      <div className="payment-method">
        <label className="payment-label">Select Payment Method:</label>
        <select
          value={paymentMethod}
          onChange={handlePaymentMethodChange}
          className="payment-select"
        >
          <option value="">Select</option>
          <option value="debit-card">Debit Card</option>
          <option value="upi">UPI</option>
          <option value="credit-card">Credit Card</option>
          <option value="netbanking">Net Banking</option>
        </select>
      </div>
      {renderPaymentForm()}
      <button className="payment-button">Submit</button>
    </div>
  );
}

export default PaymentPage;
