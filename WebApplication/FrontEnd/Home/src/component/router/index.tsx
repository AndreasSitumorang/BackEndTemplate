import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "../page/DashBoard";
import SamplePage from "../page/SamplePage";
import PathConstants from "./pathConstants";
import Sidebar from "../Assets/Sidebar";
import Header from "../Assets/Header";
import RegisterPage from "../page/RegisterPage";
import Footer from "../Assets/Footer";
const RoutesWeb: React.FC = () => {
  // const [token, setToken] = useState<string | null>(null);

  // const handleLoginSuccess = (newToken: string) => {
  //   setToken(newToken);
  //   // You may want to redirect the user or perform other actions on successful login
  // };

  return (
    <Routes>
      {/* <Route
        path={PathConstants.Login}
        element={<LoginSignup onLoginSuccess={handleLoginSuccess} />}
      /> */}
      <Route
        path={PathConstants.HOME}
        element={
          <>
            <Header />
            <Sidebar />
            <div className="main-content">
              <Home />
            </div>
            <Footer />
          </>
        }
      />
      <Route
        path={PathConstants.ABOUT}
        element={
          <>
            <Header />
            <Sidebar />
            <div className="main-content">
              <SamplePage text="Welcome to My App" />
            </div>
            <Footer />
          </>
        }
      />
            <Route
        path={PathConstants.FORM}
        element={
          <>
            <Header />
            <Sidebar />
            <div className="main-content">
              <RegisterPage/>
            </div>
            <Footer />
          </>
        }
      />
    </Routes>
  );
};

export default RoutesWeb;
