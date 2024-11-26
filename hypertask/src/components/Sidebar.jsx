import React from "react";
import { MdDashboard, MdSettings, MdListAlt } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaTasks, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { TbLayoutKanban } from "react-icons/tb";

const Sidebar = () => {
  const mainMenuItems = [
    { name: "Profile", icon: <CgProfile />, path: "/profile" },
    { name: "Dashboard", icon: <MdDashboard />, path: "/dashboard" },
    { name: "Kanban Board", icon: <TbLayoutKanban />, path: "/kanban-board" },
    { name: "Project Viewer", icon: <MdListAlt />, path: "/project-viewer" },
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
        Analytics
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
