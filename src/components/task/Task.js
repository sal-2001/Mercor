import React from "react";
import "./Task.css";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import { Image } from "antd";
function Task({ each }) {
  const { id, status, priority, title, description, comments, files, guests, photos } =
    each;
  return (
    <div className="task_item">
      <div className="task_status">
        {status === "done" && (
          <div className="priority completed">Completed</div>
        )}
        {status !== "done" && priority === "Low" && (
          <div className="priority low">Low</div>
        )}
        {status !== "done" && priority === "High" && (
          <div className="priority high">High</div>
        )}
        <MoreHorizRoundedIcon />
      </div>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="photo_list">
      {photos?.map((each) => {
            return (
              <div className="task_photo">
                <Image src={each} className="task_img" />
              </div>
            );
          })}
      </div>
      
      <div className="task_footer">
        <div className="guest_list">
          {guests?.map((each) => {
            return (
              <div className="guest_image_info">
                <Image src={each} className="invite_user_image" />
              </div>
            );
          })}
        </div>
        <div className="file_details">
          <div className="file_item">
            <SmsOutlinedIcon className="footer_icon" />
            <p>{`${comments} comments`}</p>
          </div>
          <div className="file_item">
            <InsertDriveFileOutlinedIcon className="footer_icon" />
            <p>{`${files} files`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;
