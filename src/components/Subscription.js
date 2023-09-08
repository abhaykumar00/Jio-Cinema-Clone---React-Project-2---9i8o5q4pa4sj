// SubscriptionPlans.js

import React from "react";
import "../style/Subscription.css";
function Subscription() {
  return (
    <div className="subscription-container">
      <h1>Choose Your Subscription Plan</h1>
      <div className="subscription-plan">
        <h2>Basic Plan</h2>
        <p>Access to a limited library of movies and TV shows</p>
        <p className="subscription-price">$9.99/month</p>
        <button className="subscribe-button">Subscribe</button>
      </div>
      <div className="subscription-plan">
        <h2>Standard Plan</h2>
        <p>Access to a larger library of movies and TV shows</p>
        <p className="subscription-price">$14.99/month</p>
        <button className="subscribe-button">Subscribe</button>
      </div>
      <div className="subscription-plan">
        <h2>Premium Plan</h2>
        <p>Unlimited access to the entire Jio Cinema library</p>
        <p className="subscription-price">$19.99/month</p>
        <button className="subscribe-button">Subscribe</button>
      </div>
    </div>
  );
}

export default Subscription;
