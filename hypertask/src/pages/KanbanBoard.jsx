import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loader";
import Title from "../components/Title";
import Button from "../components/Button";
import { IoMdAdd } from "react-icons/io";
import Tabs from "../components/Tabs";
import TaskTitle from "../components/TaskTitle.jsx";
import BoardView from "../components/BoardView";
import { tasks } from "../assets/data";
import AddTask from "../components/task/AddTask";

const TABS = [];

const TASK_TYPE = {
  backlog: "bg-gray-600",
  todo: "bg-blue-600",
  "in progress": "bg-yellow-600",
  completed: "bg-green-600",
};

const KanbanBoard = () => {
  const params = useParams();

  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const status = params?.status || "";

  return loading ? (
    <div className='py-10'>
      <Loading />
    </div>
  ) : (
    <div className='w-full'>
      <div className='flex items-center justify-end'>
        {!status && (
          <Button
            onClick={() => setOpen(true)}
            label='Add Task'
            icon={<IoMdAdd className='text-lg' />}
            className='border-2 border-gray-700 flex flex-row-reverse gap-1 items-center bg-white text-gray-700 rounded-md py-2 2xl:py-2.5'
          />
        )}
      </div>

      <Tabs tabs={TABS} setSelected={setSelected}>
        {!status && (
          <div className='w-full flex justify-between gap-4 md:gap-x-12 py-4'>
            <TaskTitle label='Backlog' className={TASK_TYPE.backlog} />
            <TaskTitle label='To Do' className={TASK_TYPE.todo} />
            <TaskTitle
              label='Ongoing'
              className={TASK_TYPE["in progress"]}
            />
            <TaskTitle label='Done' className={TASK_TYPE.completed} />
          </div>
        )}

        {(
          <BoardView tasks={tasks} />
        )}
      </Tabs>

      <AddTask open={open} setOpen={setOpen} />
    </div>
  );
};

export default KanbanBoard;
