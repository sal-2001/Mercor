import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/header/NavbarLeft";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";

function App() {
  const [openSidebar, setOpenSidebar] = useState(true);
  return (
    <div className="app">
      {
        openSidebar && <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}/>
      }
      <Home openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}/>
    </div>
  );
}

export default App;
