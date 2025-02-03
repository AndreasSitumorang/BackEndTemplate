import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesWeb from "./component/router";
import Sidebar from "./component/Assets/Sidebar";
import Header from "./component/Assets/Header";
import { SidebarProvider } from "./component/Context/SidebarContext";

import "./App.css";

function App() {
  return (
    <SidebarProvider>
    <Router>
      <div className="app-container">
        <Header />
        <div className="main-content">
          <Sidebar />
          <RoutesWeb />
        </div>
      </div>
    </Router>
    </SidebarProvider>
  );
}

export default App;
