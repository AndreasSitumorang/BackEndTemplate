import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const CheckToken = () => {
  const [active, setActive] = useState<boolean>(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      try {
        const decoded: any = jwtDecode(token); // Decode JWT
        if (decoded.exp) {
          const expiryTime = new Date(decoded.exp * 1000).getTime(); // JWT exp time in ms
          const currentTime = new Date().getTime(); // Current time in ms
          const dataTimeout = expiryTime - currentTime;

          if (dataTimeout <= 0) {
            setActive(false); // Token expired
            localStorage.removeItem("token"); // Optionally remove expired token
          } else {
            setActive(true); // Token is still valid
          }
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        setActive(false); // If the token is invalid or can't be decoded, treat it as expired
        localStorage.removeItem("token"); // Optionally clear invalid token
      }
    } else {
      setActive(false); // No token found, treat as expired
    }
  }, [token]);

  return active; // Return the boolean value indicating token status
};

export default CheckToken;
