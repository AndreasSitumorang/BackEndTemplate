import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import RoutesWeb from "./component/router";
import Header from "./component/Assets/Header";
import PathConstants from "./component/router/pathConstants";
import LoginSignup from "./component/page/LoginSignUp";

import "./App.css";

function App() {
  const [token, setToken] = useState<string | null>(null);

  const handleLoginSuccess = (newToken: string) => {
    setToken(newToken);
    // You may want to redirect the user or perform other actions on successful login
  };

  return (
    <>
      <Router>
      <Routes>
          <Route
            path={PathConstants.Login}
            element={<LoginSignup onLoginSuccess={handleLoginSuccess} />}
          />
        </Routes>
        <div className="app-container">
          {/* <Header /> */}
          <RoutesWeb />
        </div>

      </Router>
    </>
  );
}

export default App;
