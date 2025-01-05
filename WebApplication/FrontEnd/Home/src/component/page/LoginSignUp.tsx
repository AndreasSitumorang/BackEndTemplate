import React, { useState } from "react";
import user_icon from "../Assets/person.png";
import email_incon from "../Assets/email.png";
import passwor_icon from "../Assets/password.png";
import { useNavigate } from "react-router-dom";
import "../ui/styles/LoginSignUp.css";
import axios from "axios";


interface LoginFormProps {
  // onLogin: (email: string, password: string) => void;
  // onRegisterSuccess : (email: string, password: string, username: string) => void;
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
      // const loginData = {
      //   email,
      //   password 
      // };

      // const response = await axios.post("https://localhost:44374/Login",JSON.stringify({ email, password }),{
      //   headers: {
      //     'Content-Type': 'application/json',
      //   }
      // } );

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      };
      fetch("https://localhost:44374/Login", requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));

      // const { token } = response.data;
      // onLoginSuccess(token);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:");
    }
  };

  const handleSignUp = async () => {
    try {
      const response = await axios.post("https://localhost:44374/Signup", {
        email,
        username,
        password,
      });

      // const { token } = response.data;
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:");
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input
              type="text"
              placeholder="user name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="off"
            />
          </div>
        )}

        <div className="input">
          <img src={email_incon} alt="" />
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
          />
        </div>
        <div className="input">
          <img src={passwor_icon} alt="" />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
          />
        </div>
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
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
      <div className="submit-main-container" onClick={action === "Sign Up" ? handleSignUp:handleLogin}>
        <div className="submit-main">
          {action === "Sign Up" ? "Resgister In" : "Come In"}
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
