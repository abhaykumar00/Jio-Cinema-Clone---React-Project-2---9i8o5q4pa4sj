// PasswordUpdateForm.js
import React, { useState } from "react";

function PasswordUpdateForm() {
  const [formData, setFormData] = useState({
    name: "test",
    email: "",
    passwordCurrent: "",
    password: "",
    appType: "ott",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const projectID = localStorage.getItem("projectID");
      const token = localStorage.getItem("jwtToken");
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/user/updateMyPassword",
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            projectID: projectID,
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        console.log("hello your Password updated successfully");
        window.location.href = "/";
      } else {
        console.error("Password update failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div class="container">
      <h2>Update Password</h2>
      <form onSubmit={handleSubmit} class="form">
        <div class="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div class="form-group">
          <label htmlFor="passwordCurrent">Current Password:</label>
          <input
            type="password"
            id="passwordCurrent"
            name="passwordCurrent"
            value={formData.passwordCurrent}
            onChange={handleChange}
            required
          />
        </div>
        <div class="form-group">
          <label htmlFor="password">New Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" class="btn">
          Update Password
        </button>
      </form>
      <div>
        <button onClick={() => (window.location.href = "/login")} class="btn">
          Login
        </button>
        <button onClick={() => (window.location.href = "/SignUp")} class="btn">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default PasswordUpdateForm;
