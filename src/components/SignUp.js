import React, { useState } from "react";
import "../style/Login.css";
function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
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
        "https://academics.newtonschool.co/api/v1/user/signup",
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
        localStorage.setItem("jwtToken", jwtToken);
        localStorage.setItem("projectID", projectID);
        // Redirect to Home.js
        window.location.href = "/";
        // You can use React Router for better navigation
        console.log(jwtToken);
      } else {
        // Handle login failure
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div class="container">
        <h2>SignUp Page</h2>
        <form onSubmit={handleSubmit} class="form">
          <div class="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
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
            Sign Up
          </button>
        </form>
        <div>
          <button onClick={() => (window.location.href = "/login")} class="btn">
            Login
          </button>
          <button
            onClick={() => (window.location.href = "/PasswordUpdateForm")}
            class="btn"
          >
            Change Password
          </button>
        </div>
      </div>
    </>
  );
}

export default SignUp;
