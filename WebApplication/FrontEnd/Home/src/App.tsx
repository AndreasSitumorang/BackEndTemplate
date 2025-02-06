import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RoutesWeb from "./component/router";
import PathConstants from "./component/router/pathConstants";
import LoginSignup from "./component/page/LoginSignUp";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={PathConstants.Login} element={<LoginSignup />} />
        </Routes>
        <div className="app-container">
          <RoutesWeb />
        </div>
      </Router>
    </>
  );
}

export default App;
