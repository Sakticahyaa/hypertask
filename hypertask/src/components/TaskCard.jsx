import clsx from "clsx";
import React, { useState } from "react";
import {
  MdAttachFile,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md";
import { useSelector } from "react-redux";
import { BGS, PRIOTITYSTYELS, TASK_TYPE, formatDate } from "../utils";
import TaskDialog from "./task/TaskDialog";
import { BiMessageAltDetail } from "react-icons/bi";
import { FaList } from "react-icons/fa";
import UserInfo from "./UserInfo";
import { IoMdAdd } from "react-icons/io";

const ICONS = {
  high: <MdKeyboardDoubleArrowUp />,
  medium: <MdKeyboardArrowUp />,
  low: <MdKeyboardArrowDown />,
};

const TaskCard = ({ task }) => {
  const { user } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="w-full flex h-flex my-4 bg-white shadow-md rounded-lg">
        <div className="flex-shrink-0 bg-[#0059FF] rounded-lg w-4 h-flex"></div>
        <div className="flex-grow p-4">
          <div className="w-full flex justify-between">
            <h4 className="line-clamp-1 font-bold text-xl text-black">
              {task?.title}
            </h4>

            {user?.isAdmin && <TaskDialog task={task} />}
          </div>

          <>
            <div className="flex items-center gap-2"></div>
          </>

          <div className="w-full border-t border-gray-200 my-2" />
          <div className="flex items-center justify-between mb-2">
            <div className="flex flex-row-reverse">
              {task?.team?.map((m, index) => (
                <div
                  key={index}
                  className={clsx(
                    "w-7 h-7 rounded-full text-white flex items-center justify-center text-sm -mr-1",
                    BGS[index % BGS?.length]
                  )}
                >
                  <UserInfo user={m} />
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-black font-semibold">
              {task?.team && task?.team.length > 0
                ? task.team[0].name
                : "No Project Manager"}{" "}
            </span>{" "}
          </div>

          <span className="text-sm text-gray-600">
            {formatDate(new Date(task?.date))}
          </span>

          <div
            className={clsx(
              "flex flex-1 gap-1 items-center justify-end text-sm font-medium",
              PRIOTITYSTYELS[task?.priority]
            )}
          >
            <span className="text-lg">{ICONS[task?.priority]}</span>
            <span className="uppercase">{task?.priority} Priority</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
