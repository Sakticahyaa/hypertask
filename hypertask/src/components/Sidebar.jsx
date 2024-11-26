import React from "react";
import {
  MdDashboard,
  MdOutlineAddTask,
  MdOutlinePendingActions,
  MdSettings,
  MdTaskAlt,
  MdListAlt,
} from "react-icons/md";
import { FaTasks, FaTrashAlt, FaUsers } from "react-icons/fa";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { TbLayoutKanban } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { setOpenSidebar } from "../redux/slices/authSlice";
import clsx from "clsx";

const linkData = [
  {
    label: "Profile",
    link: "profile",
    icon: <FaUsers />,
  },
  {
    label: "Kanban",
    link: "kanban",
    icon: <FaTasks />,
  },
  {
    label: "Completed",
    link: "completed/completed",
    icon: <MdTaskAlt />,
  },
  {
    label: "Project Viewer",
    link: "projectviewer",
    icon: <MdOutlinePendingActions />,
  },
  {
    label: "To Do",
    link: "todo/todo",
    icon: <MdOutlinePendingActions />,
  },
  {
    label: "Team",
    link: "team",
    icon: <FaUsers />,
  },
  {
    label: "Trash",
    link: "trashed",
    icon: <FaTrashAlt />,
  },
];


const Sidebar = () => {
  const mainMenuItems = [
    { name: "Profile", icon: <CgProfile />, path: "/profile" },
    { name: "Dashboard", icon: <MdDashboard />, path: "/dashboard" },
    { name: "Kanban Board", icon: <TbLayoutKanban />, path: "/kanban" },
    { name: "Project Viewer", icon: <MdListAlt />, path: "/projectviewer" },
    { name: "Organization", icon: <FaUsers />, path: "/organization" },
  ];

  const bottomMenuItems = [
    { name: "Help", icon: <IoMdHelpCircleOutline />, path: "/help" },
    { name: "Settings", icon: <MdSettings />, path: "/settings" },
  ];

  return (
    <div
      className="w-64 h-screen p-4 flex flex-col"
      style={{
        backgroundColor: "#3B3B3B",
        borderTopRightRadius: "20px",
        borderBottomRightRadius: "20px",
      }}
    >
      <h1
        className="text-xl font-bold mb-6"
        style={{
          marginTop: "20px",
          color: "#00F5D0",
          fontSize: 30
        }}
      >
        HyperTask
      </h1>
      {/* Main Menu Items */}
      <ul className="space-y-4 flex-grow">
        {mainMenuItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className="flex items-center gap-4 p-2 hover:bg-gray-700 rounded-md"
              style={{ fontSize: "20px", color: "white" }}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      {/* Bottom Menu Items */}
      <ul className="space-y-4 mt-auto">
        {bottomMenuItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className="flex items-center gap-4 p-2 hover:bg-gray-700 rounded-md"
              style={{ fontSize: "20px", color: "white" }}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
