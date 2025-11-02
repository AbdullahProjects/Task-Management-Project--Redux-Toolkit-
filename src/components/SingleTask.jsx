import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../features/task/taskSlice";

const SingleTask = ({ task }) => {
  const [checked, setChecked] = useState(handleInitialTaskStatus);
  const dispatch = useDispatch();

  function handleInitialTaskStatus() {
    return task.completed;
  }

  function changeTaskStatus() {
    dispatch(toggleTask(task.id));
    setChecked(!checked);
  }

  return (
    <div className="bg-white px-6 py-4 border border-black/10 rounded-lg w-full flex flex-row gap-4 items-center">
      {/* Checkbox */}
      <div className="task-checkbox">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => changeTaskStatus()}
          className="w-4 h-4 text-blue-600 border-gray-300 rounded"
        />
      </div>

      {/* Task Info */}
      <div className="task-info w-full flex flex-col items-start gap-2">
        <p
          className={`${
            task.completed ? "text-gray-500" : "text-gray-800"
          } text-[14px] ${task.completed ? "line-through" : ""}`}
        >
          {task.text}
        </p>
        <div className="flex flex-row items-center gap-2">
          <div className="task-data-card px-2 py-0.5 border border-gray-400 rounded-lg text-[12px]">
            {task.category}
          </div>
          <div className="task-data-card px-2 py-0.5 border border-gray-400 rounded-lg text-[12px]">
            {task.priority}
          </div>
        </div>
      </div>

      {/* Actions Buttons */}
      <div className="task-actions">
        <AiOutlineDelete
          className="text-[18px] text-red-600 hover:cursor-pointer"
          onClick={() => dispatch(deleteTask(task.id))}
        />
      </div>
    </div>
  );
};

export default SingleTask;
