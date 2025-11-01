import React from "react";
import AddTask from "../../components/AddTask";
import SearchTasks from "../../components/SearchTasks";
import TasksList from "../../components/TasksList";

const Home = () => {
  return (
    <div className="home bg-linear-to-r from-blue-600/5 to-purple-600/5 flex items-center justify-center">
      <div className="h-screen w-[50%] flex flex-col items-center pt-16 ">
        <h1 className="text-[30px] font-bold text-[#546bff]">My Todo App</h1>
        <p className="mt-2 text-[14px] text-black/60">
          Stay organized and productive
        </p>
        <p className="mt-1 text-[14px] text-black/60">
          1 completed • 3 total tasks
        </p>

        {/* Add Task */}
        <AddTask />

        {/* Search Task */}
        {/* <SearchTasks /> */}

        {/* Tasks List */}
        {/* <TasksList /> */}
      </div>
    </div>
  );
};

export default Home;
