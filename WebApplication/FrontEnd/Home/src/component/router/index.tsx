import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "../page/DataGridPage";
import SamplePage from "../page/SamplePage";
import PathConstants from "./pathConstants";
import Sidebar from "../Assets/Sidebar";
import Header from "../Assets/Header";
import FormPage from "../page/FormPage";
import Footer from "../Assets/Footer";

const RoutesWeb: React.FC = () => {

  return (
    <Routes>
      <Route
        path={PathConstants.HOME}
        element={
          <>
            <Header />
            <Sidebar />
            <div className="main-content">
              <Home namePage="Data Grid Template" />
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
              <SamplePage namePage="Title Template" />
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
              <FormPage namePage="Form Template" />
            </div>
            <Footer />
          </>
        }
      />
    </Routes>
  );
};

export default RoutesWeb;
