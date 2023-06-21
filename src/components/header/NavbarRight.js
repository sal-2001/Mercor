import React from "react";
import "./Navbar.css";
import { Image, Input } from "antd";
import SearchIcon from "@mui/icons-material/Search";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import LiveHelpOutlinedIcon from "@mui/icons-material/LiveHelpOutlined";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
function NavbarRight() {
  return (
    <div className="navbar">
      <div className="right_container">
        <div className="search_bar">
          <SearchIcon className="search_icon" />
          <Input
            placeholder="Search for anything..."
            className="search_input"
          />
        </div>
        <div className="notification">
          <DateRangeOutlinedIcon className="calendar_icon" />
          <LiveHelpOutlinedIcon className="calendar_icon" />
          <NotificationsOutlinedIcon className="calendar_icon"/>
        </div>
        <div className="details">
          <div className="text_info">
            <p>Anima Agrawal</p>
            <span>U.P, India</span>
          </div>
          <div className="image_info">
            <Image src="https://www.pngitem.com/pimgs/m/29-297391_woman-at-clker-vector-free-download-png-clipart.png" className="user_image"/>
          </div>
          <KeyboardArrowDownOutlinedIcon className="calendar_icon"/>
        </div>
      </div>
    </div>
  );
}

export default NavbarRight;
