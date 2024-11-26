import React from "react";
import { MdDashboard, MdSettings, MdListAlt } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaTasks, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { TbLayoutKanban } from "react-icons/tb";
import clsx from "clsx";

const Sidebar = () => {
  const menuItems = [
    { name: "Profile", icon: <CgProfile />, path: "/profile" },
    { name: "Dashboard", icon: <MdDashboard />, path: "/dashboard" },
    { name: "Kanban Board", icon: <TbLayoutKanban />, path: "/kanban-board" },
    { name: "Project Viewer", icon: <MdListAlt />, path: "/project-viewer" },
    { name: "Organization", icon: <FaUsers />, path: "/organization" },
    { name: "Help", icon: <IoMdHelpCircleOutline />, path: "/help" },
    { name: "Settings", icon: <MdSettings />, path: "/settings" },
  ];

  return (
    <div className="bg-gray-800 text-white w-64 h-screen p-4 flex flex-col">
      <h1 className="text-teal-400 text-xl font-bold mb-6">Analytics</h1>
      <ul className="space-y-4">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className="flex items-center gap-4 p-2 hover:bg-gray-700 rounded-md"
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
