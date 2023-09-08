import React, { useState, useContext } from "react";
import SignUp from "./SignUp";
import { MyContext } from "../App";
import { Link } from "react-router-dom";
function LoginPage() {
  const { setVideoUrl, slider, setSlider, activeLink, setActiveLink } =
    useContext(MyContext);
  setActiveLink("he");
  const [error, setError] = useState();
  const [signup, setSignup] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    appType: "ott",
  });

  const [projectID, setProjectID] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleProjectIDChange = (e) => {
    setProjectID(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    // Perform API POST request
    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            projectID: projectID, // Set projectID in the request header
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        // Assuming the API returns a JWT token in the response
        const jwtToken = data.token;
        localStorage.setItem("myName", data.data.name);
        localStorage.setItem("jwtToken", jwtToken);
        localStorage.setItem("projectID", projectID);
        localStorage.setItem("showID", data.data._id);
        // Redirect to Home.js
        window.location.href = "/";
        // You can use React Router for better navigation
        setError("");
        console.log(jwtToken);
      } else {
        // Handle login failure
        console.log("this is error");
        console.error("Login failed");
        setError("your password is incorrect");
      }
    } catch (error) {
      console.error("Error:", error);
      console.log("this is error");
      setError(error);
    }
  };

  return (
    <div class="container">
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit} class="form">
        <div class="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div class="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div class="form-group">
          <label htmlFor="projectID">Project ID:</label>
          <input
            type="text"
            id="projectID"
            name="projectID"
            value={projectID}
            onChange={handleProjectIDChange}
            required
          />
        </div>
        <button type="submit" class="btn">
          Login
        </button>
      </form>
      <div>
        <button onClick={() => (window.location.href = "/SignUp")} class="btn">
          Sign Up
        </button>
        <button
          onClick={() => (window.location.href = "/PasswordUpdateForm")}
          class="btn"
        >
          Change Password
        </button>
      </div>
      {error && <p>{error}</p>}
    </div>
  );
}

export default LoginPage;
