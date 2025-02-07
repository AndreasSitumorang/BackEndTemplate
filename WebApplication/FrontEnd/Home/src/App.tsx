import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import RoutesWeb from "./component/router";
import PathConstants from "./component/router/pathConstants";
import LoginSignup from "./component/page/LoginSignUp";
import { jwtDecode } from "jwt-decode";

import "./App.css";

function App() {
  const token = localStorage.getItem("token");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        if (decoded.exp) {
          const expiryTime = new Date(decoded.exp * 1000).getTime();
          const currentTime = new Date().getTime();
          const dataTimeout = expiryTime - currentTime;

          console.log("Token expiry time:", currentTime);
          console.log("Token expiry time:", expiryTime);
          console.log("Token expiry time:", dataTimeout);
          // If token expired, set authentication to false
          if (dataTimeout <= 0) {
            localStorage.removeItem("token"); // Optionally clear the expired token
            setIsAuthenticated(false);
            window.location.reload(); 
          } else {
            setIsAuthenticated(true);
          }
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        localStorage.removeItem("token"); // Optionally clear the invalid token
        setIsAuthenticated(false);
        window.location.reload(); 
      }
    } else {
      setIsAuthenticated(false); // No token found, mark as unauthenticated
      localStorage.removeItem("token");
    }
  }, [token]);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path={PathConstants.LOGIN}
            element={
              isAuthenticated ? (
                <Navigate to={PathConstants.ABOUT} />
              ) : (
                <LoginSignup />
              )
            }
          />
        </Routes>
        <RoutesWeb isAuthenticated={isAuthenticated} />

      </Router>
    </>
  );
}

export default App;
