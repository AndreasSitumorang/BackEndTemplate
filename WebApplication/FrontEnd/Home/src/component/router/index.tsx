import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../page/DataGridPage";
import SamplePage from "../page/SamplePage";
import PathConstants from "./pathConstants";
import Sidebar from "../Assets/Sidebar";
import FormPage from "../page/FormPage";
import LoginSignup from "../page/LoginSignUp";

interface RoutesWebProps {
  isAuthenticated: boolean;
}
const RoutesWeb: React.FC<RoutesWebProps> = ({ isAuthenticated }) => {
  useEffect(() => {
    // Clear the URL if user is not authenticated
    if (!isAuthenticated) {
      window.history.replaceState({}, "", PathConstants.LOGIN); // Assuming LOGIN is the route for the login page
    }
  }, [isAuthenticated]);



  return (
    <Routes>
      <Route
        path={PathConstants.HOME}
        element={
          isAuthenticated ? (
            <div className="app-container">
              <Sidebar />
              {/* <div className="main-content" onChange={handrefresh}> */}
              <div className="main-content">
                <Home namePage="Data Grid Template" />
              </div>
            </div>
          ) : (
            <LoginSignup />
          )
        }
      />
      <Route
        path={PathConstants.ABOUT}
        element={
          isAuthenticated ? (
            <div className="app-container">
              <Sidebar />
              {/* <div className="main-content" onChange={handrefresh}> */}
              <div className="main-content">
                <SamplePage namePage="Title Template" />
              </div>
            </div>
          ) : (
            <LoginSignup />
          )
        }
      />
      <Route
        path={PathConstants.FORM}
        element={
          isAuthenticated ? (
            <div className="app-container">
              <Sidebar />
              {/* <div className="main-content" onChange={handrefresh}> */}
              <div className="main-content">
                <FormPage namePage="Form Template" />
              </div>
            </div>
          ) : (
            <LoginSignup />
          )
        }
      />
    </Routes>
  );
};

export default RoutesWeb;
