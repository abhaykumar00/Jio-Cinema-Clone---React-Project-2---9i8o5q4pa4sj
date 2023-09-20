// SubscriptionPlans.js

import React, { useContext } from "react";
import "../style/Subscription.css";
import { MyContext } from "../App";
function Subscription() {
  const { setSeaarchActive, slider, setSlider } = useContext(MyContext);
  setSeaarchActive(false);
  return (
    <div className="subscription-container" onClick={() => setSlider(false)}>
      <div className="planHeader">
        <h3 className="planHeaderH3">JioCinema Premium</h3>
        <p>
          Welcome to the new home of all your favourite Hollywood content. The
          biggest, the best. Exclusively yours.
        </p>
      </div>
      <div className="planFeatures">
        <h6>Best of Hollywood</h6>
        <ul>
          <li>Watch on any device</li>
          <li>Highest video & audio quality</li>
          <li>Upto 4 devices simultaneously</li>
        </ul>
      </div>
      <p className="termAndCondition">
        By continuing you agree to our{" "}
        <span className="termAndConditionSpan">Terms of Use</span> and
        acknowledge that you have read our{" "}
        <span className="termAndConditionSpan">Privacy Policy</span> .
      </p>
      <div className="promocode">
        <a className="promocodeAnchor">Apply Promo Code</a>
        <button className="promocodeButton">continuie and Pay 999</button>
      </div>
      <div className="alreadySubscried">
        <p>Already Subscribed?</p>
        <a className="alreadySubscriedAnchor">click here</a>
      </div>
    </div>
  );
}

export default Subscription;

/**  <div className="subscription-container">
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
    </div> */
