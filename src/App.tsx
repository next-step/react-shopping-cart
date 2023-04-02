import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/common/Navbar/Navbar";
import "./css/index.css";

function App() {
  return (
    <div id="app" className="app-container">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
