import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const AddTask = () => {
  const [text, setText] = useState("");
  const [selectedCategoryOption, setSelectedCategoryOption] =
    useState("personal");
  const [selectedPriorityOption, setSelectedPriorityOption] = useState("high");

  const submitTask = () => {};

  return (
    <div className="form mt-8 bg-white px-10 py-6 border border-black/10 rounded-lg w-full">
      <form onSubmit={submitTask}>
        <div className="flex flex-row items-center gap-3">
          {/* Input Field */}
          <input
            type="text"
            placeholder="Add a new task..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="bg-gray-100 text-[14px] font-medium w-full px-4 py-2 rounded-sm placeholder:text-black-400 focus:outline-none"
          />
          {/* Add Task Button */}
          <button
            type="submit"
            className="bg-[#546bff] text-[14px] flex flex-row items-center justify-center gap-1 px-4 py-2 rounded-md text-white hover:cursor-pointer hover:shadow-lg hover:shadow-black/10 transition-all duration-500"
          >
            <FaPlus className="text-[14px]" />
            <p className="text-[14px] text-semibold">Add</p>
          </button>
        </div>
        <div className="mt-4 flex flex-row gap-5 items-center justify-normal">
          {/* Select Category Option */}
          <div className="selection flex flex-row items-center gap-2">
            <label
              htmlFor="category"
              className="text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <select
              id="category"
              value={selectedCategoryOption}
              onChange={(e) => setSelectedCategoryOption(e.target.value)}
              className="block rounded-lg border border-gray-300 bg-white py-1 px-2 text-gray-900 focus:border-blue-500 focus:ring-amber-500 outline-none"
            >
              <option value="personal">Personal</option>
              <option value="work">Work</option>
              <option value="school">School</option>
            </select>
          </div>
          {/* Select Priority Option */}
          <div className="selection flex flex-row items-center gap-2">
            <label
              htmlFor="priority"
              className="text-sm font-medium text-gray-700"
            >
              Priority
            </label>
            <select
              id="priority"
              value={selectedPriorityOption}
              onChange={(e) => setSelectedPriorityOption(e.target.value)}
              className="block rounded-lg border border-gray-300 bg-white py-1 px-2 text-gray-900 focus:border-blue-500 focus:ring-amber-500 outline-none"
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
