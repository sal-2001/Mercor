import React, { useEffect, useState } from "react";
import "./Home.css";
import { TaskData } from "../../TaskData";
import NavbarRight from "../header/NavbarRight";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import InsertLinkRoundedIcon from "@mui/icons-material/InsertLinkRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import ViewStreamRoundedIcon from "@mui/icons-material/ViewStreamRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Image } from "antd";
import Task from "../task/Task";
import { colors } from "@mui/material";

function Home() {
  const [todoList, setTodoList] = useState([]);
  const [onProgressList, setOnProgressList] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  const [taskList, setTaskList] = useState([]);
  const [target, setTarget] = useState({ id: "", status: "" });
  useEffect(() => {
    if (taskList.length === 0) {
      setTaskList(TaskData?.tasks);
    }
  }, []);
  useEffect(() => {
    taskList.forEach((each) => {
      if (each?.status === "todo") {
        setTodoList((prevState) => [...prevState, each]);
      } else if (each?.status === "onprogress") {
        setOnProgressList((prevState) => [...prevState, each]);
      } else if (each?.status === "done") {
        setCompletedList((prevState) => [...prevState, each]);
      }
    });
  }, [taskList]);
  const handleDragEnter = (id, status) => {
    setTarget({ id: id, status: status });
  };
  const handleDragEnd = (id, status) => {
    let srcIndex, srcItem;
    let srcList;
    // console.log(target.status);
    if (status === target?.status) {
      return;
    }
    if (status === "todo") {
      srcIndex = todoList?.findIndex((item) => item?.id === id);
      if (srcIndex < 0) {
        return;
      }
      srcItem = todoList[srcIndex];
      srcList = [...todoList];
    } else if (status === "onprogress") {
      srcIndex = onProgressList?.findIndex((item) => item?.id === id);
      if (srcIndex < 0) {
        return;
      }
      srcItem = onProgressList[srcIndex];
      srcList = [...onProgressList];
    } else if (status === "done") {
      srcIndex = completedList?.findIndex((item) => item?.id === id);
      if (srcIndex < 0) {
        return;
      }
      srcItem = completedList[srcIndex];
      srcList = [...completedList];
    }
    srcList?.splice(srcIndex, 1);
    if (status === "todo") {
      setTodoList(srcList);
    } else if (status === "onprogress") {
      setOnProgressList(srcList);
    } else if (status === "done") {
      setCompletedList(srcList);
    }
    let trgList;
    if (target?.status === "todo") {
      srcItem.status = "todo";
      trgList = [...todoList];
      trgList?.unshift(srcItem);
      setTodoList(trgList);
    } else if (target?.status === "onprogress") {
      srcItem.status = "onprogress";
      trgList = [...onProgressList];
      trgList?.unshift(srcItem);
      setOnProgressList(trgList);
    } else if (target?.status === "done") {
      srcItem.status = "done";
      trgList = [...completedList];
      trgList?.unshift(srcItem);
      setCompletedList(trgList);
    }
  };
  return (
    <div className="home">
      <NavbarRight />
      <div className="home_container">
        <div className="home_title">
          <div className="title_content">
            <h2>Mobile App</h2>
            <CreateRoundedIcon className="title_icon" />
            <InsertLinkRoundedIcon className="title_icon" />
          </div>
          <div className="title_invite">
            <AddRoundedIcon className="title_icon" />
            <p>Invite</p>
            <div className="invite_users">
              <div className="invite_image_info">
                <Image
                  src="https://www.shutterstock.com/image-vector/simple-cartoon-avatar-vector-flat-260nw-1988123576.jpg"
                  className="invite_user_image"
                />
              </div>
              <div className="invite_image_info">
                <Image
                  src="https://www.persofoto.de/apple-touch-icon-180x180.png"
                  className="invite_user_image"
                />
              </div>
              <div className="invite_image_info">
                <Image
                  src="https://www.shutterstock.com/image-vector/simple-cartoon-girl-avatar-drawing-600w-1988228618.jpg"
                  className="invite_user_image"
                />
              </div>
              <div className="invite_image_info">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxcryDQUGWA6r5cfwJtfIo6ylDVf97EUGoIhokfp5Mbdlaocg4GElk9NSYfdKHMQrlu5w&usqp=CAU"
                  className="invite_user_image"
                />
              </div>
              <div className="invite_image_info">
                <div className="invite_remaining">+2</div>
              </div>
            </div>
          </div>
        </div>
        <div className="home_filter">
          <div className="filter">
            <div className="filter_item">
              <FilterAltOutlinedIcon className="filter_icon" />
              <p>Filter</p>
              <KeyboardArrowDownOutlinedIcon className="filter_icon_down" />
            </div>
            <div className="filter_item">
              <PermContactCalendarOutlinedIcon className="filter_icon" />
              <p>Today</p>
              <KeyboardArrowDownOutlinedIcon className="filter_icon_down" />
            </div>
          </div>
          <div className="share">
            <div className="filter_item">
              <PeopleOutlineOutlinedIcon className="filter_icon" />
              <p>Share</p>
            </div>
            <p>|</p>
            <ViewStreamRoundedIcon className="pause_icon" />
            <GridViewRoundedIcon className="grid_icon" />
          </div>
        </div>
        <div className="home_tasks">
          <div className="task_container">
            <div className="task_container_title border_b">
              <div className="task_title_text">
                <FiberManualRecordIcon className="task_circle_icon_b" />
                <span>To Do</span>
                <div className="task_count">
                  <p>{todoList.length}</p>
                </div>
              </div>
              <AddRoundedIcon className="title_icon" />
            </div>
            {todoList?.map((each) => {
              return (
                <Task
                  id={each?.id}
                  each={each}
                  handleDragEnd={handleDragEnd}
                  handleDragEnter={handleDragEnter}
                />
              );
            })}
          </div>
          <div className="task_container">
            <div className="task_container_title border_o">
              <div className="task_title_text">
                <FiberManualRecordIcon className="task_circle_icon_o" />
                <span>On Progress</span>
                <div className="task_count">
                  <p>{onProgressList.length}</p>
                </div>
              </div>
            </div>
            {onProgressList?.map((each) => {
              return (
                <Task
                  id={each?.id}
                  each={each}
                  handleDragEnd={handleDragEnd}
                  handleDragEnter={handleDragEnter}
                />
              );
            })}
          </div>
          <div className="task_container">
            <div className="task_container_title border_g">
              <div className="task_title_text">
                <FiberManualRecordIcon className="task_circle_icon_g" />
                <span>Done</span>
                <div className="task_count">
                  <p>{completedList.length}</p>
                </div>
              </div>
            </div>
            {completedList?.map((each) => {
              return (
                <Task
                  id={each?.id}
                  each={each}
                  handleDragEnd={handleDragEnd}
                  handleDragEnter={handleDragEnter}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
