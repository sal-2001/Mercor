import React from "react";
import "./Navbar.css";
import { DoubleLeftOutlined } from "@ant-design/icons";

function NavbarLeft() {
  return (
    <div className="navbar">
      <div className="left_container">
        <h4>Project M</h4>
        <DoubleLeftOutlined className="double_left_icon"/>
      </div>
    </div>
  );
}

export default NavbarLeft;
