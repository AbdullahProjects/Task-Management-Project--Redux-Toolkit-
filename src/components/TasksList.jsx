import React, { useState } from "react";
import { useSelector } from "react-redux";
import SingleTask from "./SingleTask";

const TasksList = () => {
  const { items, filters } = useSelector((state) => state.tasks);
  const filteredTasks =
    filters === "completed" ? items.filter((item) => item.completed) : items;
  console.log(items);

  return (
    <>
      <div className="tasks w-full mt-6 flex flex-col gap-3">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => <SingleTask key={task.id} task={task} />)
        ) : (
          <div className="text-center py-10 bg-white rounded-md text-[14px] text-gray-800">
            No Task Found
          </div>
        )}
      </div>
    </>
  );
};

export default TasksList;
