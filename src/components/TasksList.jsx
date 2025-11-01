import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

const TasksList = () => {
  return (
    <>
      <div className="tasks w-full mt-6 flex flex-col gap-3">
        <SingleTask />
        <SingleTask />
        <SingleTask />
      </div>
    </>
  );
};

const SingleTask = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="bg-white px-6 py-4 border border-black/10 rounded-lg w-full flex flex-row gap-4 items-center">
      {/* Checkbox */}
      <div className="task-checkbox">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          className="w-4 h-4 text-blue-600 border-gray-300 rounded"
        />
      </div>

      {/* Task Info */}
      <div className="task-info w-full flex flex-col items-start gap-2">
        <p className="text-gray-800 text-[14px]">
          Combines multiple slices into a single reducer, and allows "lazy
          loading" of slices after initialisation of slices after initialisation.
        </p>
        <div className="flex flex-row items-center gap-2">
          <div className="task-data-card px-2 py-0.5 border border-gray-400 rounded-lg text-[12px]">
            Work
          </div>
          <div className="task-data-card px-2 py-0.5 border border-gray-400 rounded-lg text-[12px]">
            Medium
          </div>
        </div>
      </div>

      {/* Actions Buttons */}
      <div className="task-actions">
        <AiOutlineDelete className="text-[18px] text-red-600 hover:cursor-pointer" />
      </div>
    </div>
  );
};

export default TasksList;
