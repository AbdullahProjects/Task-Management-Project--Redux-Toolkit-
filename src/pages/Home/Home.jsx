import React from "react";
import AddTask from "../../components/AddTask";
import SearchTasks from "../../components/SearchTasks";
import TasksList from "../../components/TasksList";

const Home = () => {
  return (
    <div className="home flex items-center justify-center w-full">
      <div className="w-[90%] md:w-[70%] lg:w-[55%] flex flex-col items-center py-16">
        <h1 className="text-[30px] font-bold text-[#546bff]">My Todo App</h1>
        <p className="mt-2 text-[14px] text-black/60">
          Stay organized and productive
        </p>

        {/* Add Task */}
        <AddTask />

        {/* Search Task */}
        <SearchTasks />

        {/* Tasks List */}
        <TasksList />
      </div>
    </div>
  );
};

export default Home;
