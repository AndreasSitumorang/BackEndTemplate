import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesWeb from "./component/router";

function App() {
  return (
    <Router>
      <div>
        <RoutesWeb />
      </div>
    </Router>
  );
}

export default App;
