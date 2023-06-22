import React from "react";
import "./Navbar.css";
import { DoubleLeftOutlined } from "@ant-design/icons";
import { Image } from "antd";

function NavbarLeft({openSidebar, setOpenSidebar}) {
  return (
    <div className="navbar">
      <div className="left_container">
        <div className="logo_text">
          <Image
            src="https://ik.imagekit.io/wqjwh0cz6/Group_7.png?updatedAt=1687415022784"
            className="logo_img"
          />
          <h4>Project M</h4>
        </div>
        <DoubleLeftOutlined className="double_left_icon" onClick={()=>setOpenSidebar(false)}/>
      </div>
    </div>
  );
}

export default NavbarLeft;
