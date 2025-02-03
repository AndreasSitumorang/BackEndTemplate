import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import RoutesWeb from "./component/router";
import Header from "./component/Assets/Header";

import "./App.css";

function App() {

  
  return (
    <>
      <Router>
        <div className="app-container">
          <Header />
          <div className="main-content">
            {/* <Sidebar /> */}
            <RoutesWeb />
          </div>
        </div>
      </Router>
    </>
   
  );
}

export default App;
