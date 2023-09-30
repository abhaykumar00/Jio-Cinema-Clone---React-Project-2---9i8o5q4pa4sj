import React, { useState, useContext } from "react";
import "../style/Login.css";
import { MyContext } from "../App";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
function SignUp() {
  const { setActiveLink, setLogin } = useContext(MyContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    appType: "ott",
  });

  // const [projectID, setProjectID] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleProjectIDChange = (e) => {
  //   setProjectID(e.target.value);
  // };

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
            projectID: "9i8o5q4pa4sj", // Set projectID in the request header
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      if (response.ok) {
        //hear I got the token in response
        localStorage.setItem("myName", data.data.user.name);
        const jwtToken = data.token;
        localStorage.setItem("jwtToken", jwtToken);
        // localStorage.setItem("projectID", projectID);
        // Redirect to Home.js
        window.location.href = "/";
        localStorage.setItem("showID", data.data.user._id);
        setLogin(true);
        console.log(jwtToken);
      } else {
        console.log(response);
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Facing Server Problem");
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
          {/* <div class="form-group">
            <label htmlFor="projectID">Project ID:</label>
            <input
              type="text"
              id="projectID"
              name="projectID"
              value={projectID}
              onChange={handleProjectIDChange}
              required
            />
          </div> */}
          <button type="submit" class="btn">
            Sign Up
          </button>
          <p></p>
          Do you already have an account?
          <Link to={`/login`}>
            <nav className="loginSignupHover">login</nav>
          </Link>
        </form>
        <div>
          {/* <button onClick={() => (window.location.href = "/login")} class="btn">
            Login
          </button> */}
          {/* <button
            onClick={() => (window.location.href = "/PasswordUpdateForm")}
            class="btn"
          >
            Change Password
          </button> */}
        </div>
      </div>
    </>
  );
}

export default SignUp;
