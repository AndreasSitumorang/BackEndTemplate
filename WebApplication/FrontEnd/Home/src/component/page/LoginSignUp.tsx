import React, { useState, useEffect } from "react";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import { useNavigate } from 'react-router-dom';
import "../ui/styles/LoginSignUp.css";
import axios from "axios";

interface LoginFormProps {
  onLoginSuccess: (token: string) => void;
}

const LoginSignup: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [action, setAction] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();


  const handleLogin = async () => {
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      };
      fetch("https://localhost:44374/Login", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          // Assuming token is in data.token
          onLoginSuccess(data.token); // Call onLoginSuccess
          navigate("/dashboard");
        })
        .catch((error) => {
          console.error("Login failed:", error);
        });
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const handleSignUp = async () => {
    try {
      const response = await axios.post("https://localhost:44374/Signup", {
        email,
        username,
        password,
      });
      navigate("/dashboard");
    } catch (error) {
      console.error("Sign Up failed:", error);
    }
  };

  return (
    <div className="container">
      <div className="headers">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? null : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="off"
            />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
          />
        </div>
      </div>
      {action === "Sign Up" ? null : (
        <div className="forgot-password">
          Lost Password?
          <span>Click Here</span>
        </div>
      )}

      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
      <div className="submit-main-container" onClick={action === "Sign Up" ? handleSignUp : handleLogin}>
        <div className="submit-main">
          {action === "Sign Up" ? "Register" : "Log In"}
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
