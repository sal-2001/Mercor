import React from "react";
import "./App.css";
import Navbar from "./components/header/NavbarLeft";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="app">
      <Sidebar/>
      <Home/>
    </div>
  );
}

export default App;
