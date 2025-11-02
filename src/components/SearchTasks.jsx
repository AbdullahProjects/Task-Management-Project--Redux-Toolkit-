import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, searchTasks } from "../features/task/taskSlice";

const SearchTasks = () => {
  const filter = useSelector((state) => state.tasks.filters);
  const dispatch = useDispatch();
  const [filterOption, setFilterOption] = useState(() => {
    return filter;
  });

  function changeFilter(value) {
    dispatch(setFilter(value));
    setFilterOption(value);
  }

  console.log(filterOption);

  return (
    <div className="search-task mt-4 w-full flex flex-row items-center gap-4">
      {/* Input Field for Search Tasks*/}
      {/* <div className="search-input-field w-full bg-white flex flex-row items-center gap-2 rounded-md py-3 px-4">
        <IoSearchOutline />
        <input
          type="text"
          placeholder="Search tasks..."
          onChange={(v) => dispatch(searchTasks(v.target.value))}
          className="w-full text-[14px] font-medium focus:outline-none placeholder:text-black-400 placeholder:font-normal bg-transparent"
        />
      </div> */}
      <h1 className="w-full text-[16px] font-medium">Filter Tasks</h1>
      {/* Filter Tasks */}
      <div className="filter-tasks flex flex-row items-center gap-2">
        <CiFilter className="text-[20px] text-black/60" />
        <select
          id="category"
          value={filterOption}
          onChange={(e) => changeFilter(e.target.value)}
          className="block rounded-lg border border-gray-300 bg-white py-2 px-2 text-gray-900 focus:border-blue-500 focus:ring-amber-500 outline-none"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
        </select>
      </div>
    </div>
  );
};

export default SearchTasks;
