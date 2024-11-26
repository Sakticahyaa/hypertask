import React from "react";
import TaskCard from "./TaskCard";

const BoardView = ({ tasks }) => {
  const columns = ["backlog", "todo", "in progress", "completed"];
  const columnTitles = {
    };

  return (
    <div className='w-full py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 2xl:gap-10'>
      {columns.map((column, index) => (
        <div key={index}>
          <h2 className='text-lg font-semibold mb-2'>{columnTitles[column]}</h2>
          {tasks
            .filter((task) => task.stage === column)
            .map((task, idx) => (
              <TaskCard task={task} key={idx} />
            ))}
        </div>
      ))}
    </div>
  );
};

export default BoardView;
