import React from "react"; 
import "./Sidebar.css";
import NavbarLeft from "../header/NavbarLeft";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LightbulbRoundedIcon from "@mui/icons-material/LightbulbRounded";
import { Input } from "antd";

function Sidebar() {
  return (
    <div className="side_bar">
      <NavbarLeft />
      <div className="page_list">
        <div className="list_item">
          <GridViewOutlinedIcon className="list_icon" />
          <p>Home</p>
        </div>
        <div className="list_item">
          <SmsOutlinedIcon className="list_icon" />
          <p>Messages</p>
        </div>
        <div className="list_item">
          <AssignmentOutlinedIcon className="list_icon" />
          <p>Tasks</p>
        </div>
        <div className="list_item">
          <PeopleOutlineOutlinedIcon className="list_icon" />
          <p>Members</p>
        </div>
        <div className="list_item">
          <SettingsOutlinedIcon className="list_icon" />
          <p>Settings</p>
        </div>
      </div>
      <div className="project_list">
        <div className="project_title">
          <h5>MY PROJECTS</h5>
          <AddBoxOutlinedIcon className="add_btn" />
        </div>
        <div className="project_items">
          <div className="project_item active">
            <FiberManualRecordIcon className="dot_icon_g" />
            <p>Mobile App</p>
            <MoreHorizIcon className="three_dot_icon" />
          </div>
          <div className="project_item">
            <FiberManualRecordIcon className="dot_icon_o" />
            <p>Website Redesign</p>
          </div>
          <div className="project_item">
            <FiberManualRecordIcon className="dot_icon_p" />
            <p>Design system</p>
          </div>
          <div className="project_item">
            <FiberManualRecordIcon className="dot_icon_b" />
            <p>Wireframes</p>
          </div>
        </div>
        <div className="thoughts_container">
          <div className="ellipse">
            <LightbulbRoundedIcon className="bulb_icon" />
          </div>
          <div className="rectangle">
            <h4>Thoughts Time</h4>
            <p>
              We don’t have any notice for you, till then you can share your
              thoughts with your peers.
            </p>
            <Input placeholder="Write message" className="thoughts_input" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
