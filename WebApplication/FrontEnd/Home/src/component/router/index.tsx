import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "../page/DashBoard";
// import Header from "../page/Header";
import PathConstants from "./pathConstants";
import LoginSignup from "../page/LoginSignUp";

const RoutesWeb: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);

  const handleLoginSuccess = (newToken: string) => {
    setToken(newToken);
    // You may want to redirect the user or perform other actions on successful login
  };

  return (
    <Routes>
      <Route
        path={PathConstants.Login}
        element={<LoginSignup onLoginSuccess={handleLoginSuccess} />}
      />
      <Route path={PathConstants.HOME} element={<Home />} />
      {/* <Route
        path={PathConstants.ABOUT}
        element={<Header text="Welcome to My App" />}
      /> */}
    </Routes>
  );
};

export default RoutesWeb;
