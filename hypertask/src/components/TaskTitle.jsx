import clsx from "clsx";
import React from "react";
import { IoMdAdd } from "react-icons/io";

const TaskTitle = ({ label, className }) => {
  return (
    <div className='w-full h-10 md:h-12 px-2 md:px-4 rounded bg-[#3B3B3B] flex items-center justify-between'>
      <div className='w-full gap-2 items-center'>
        <div className={clsx(className)} />
        <p className='text-2xl font-bold md:text-xl text-[#00F5D0] text-center'>{label}</p>
      </div>
    </div>
  );
};

export default TaskTitle;