import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";

const SearchTasks = () => {
  const [filterOption, setFilterOption] = useState("all");

  return (
    <div className="search-task mt-4 w-full flex flex-row items-center gap-4">
      {/* Input Field for Search Tasks*/}
      <div className="search-input-field w-full bg-gray-100 flex flex-row items-center gap-2 rounded-md py-3 px-4">
        <IoSearchOutline />
        <input
          type="text"
          placeholder="Search tasks..."
          className="w-full text-[14px] font-medium focus:outline-none placeholder:text-black-400 placeholder:font-normal bg-transparent"
        />
      </div>
      {/* Filter Tasks */}
      <div className="filter-tasks flex flex-row items-center gap-2">
        <CiFilter className="text-[20px] text-black/60"/>
        <select
          id="category"
          value={filterOption}
          onChange={(e) => setFilterOption(e.target.value)}
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
