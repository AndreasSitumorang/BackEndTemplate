import React, { useState } from "react";
import "../ui/styles/LoginPage.css";
import { Container, Typography } from "@mui/material";
import { Form, Button } from "react-bootstrap";
// import Image from "react-bootstrap/Image";
// import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from 'axios';
// import AlienImage from "../Image/dell-alienware-logo_ts2h.jpg";


interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
  onRegister : (email: string, password: string, username: string) => void;
  onLoginSuccess: (token: string) => void;
}

const LoginPage: React.FC<LoginFormProps> = ({ onLogin, onRegister,onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here, you can perform validation and authentication logic
    // For simplicity, we'll just log the input values for now
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleLogin = async () => {
    // You can add validation logic here before calling onLogin
    onLogin(email, password);
    try {
      const response = await axios.post('https://localhost:44374/Login', {
        username,
        password,
      });

      const { token } = response.data;
      onLoginSuccess(token);
    } catch (error) {
      console.error('Login failed: error login');
      // Handle login failure (show error message, etc.)
    }
  };

  const handleRegister = () => {
    // You can add validation logic here before calling onLogin
    onRegister(email, password, username);
  };

  return (
    <div>
      <Row>
        <div className="column">
          <Container className="login-container">
            <Typography variant="h4">Login</Typography>
            <Form
              onSubmit={handleSubmit}
              style={{ width: "100%", marginLeft: "0%", marginTop: "0%" }}
            >
              <Form.Group>
                <Form.Label htmlFor="email">Email:</Form.Label>
                <Form.Control
                  type="email"
                  aria-describedby="emailHelp"
                  //   value={email}
                  onChange={handleEmailChange}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="password">Password:</Form.Label>
                <Form.Control
                  type="password"
                  //   value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </Form.Group>
              <Button type="submit" onClick={handleLogin}>Login</Button>
            </Form>
          </Container>
        </div>
      </Row>
    </div>
  );
};

export default LoginPage;
