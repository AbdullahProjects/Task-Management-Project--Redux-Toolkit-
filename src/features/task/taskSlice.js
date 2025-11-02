import { createSlice, nanoid } from "@reduxjs/toolkit";
import { act } from "react";

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    filteredItems: [],
    filters: "all",
  },
  reducers: {
    addTask: {
      reducer: (state, action) => {
        state.items.push(action.payload);
        state.filteredItems = state.items;
      },
      prepare: (text, category, priority) => {
        return {
          payload: {
            id: nanoid(),
            text,
            completed: false,
            category,
            priority,
          },
        };
      },
    },
    toggleTask: (state, action) => {
      const task = state.items.find((t) => t.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask: (state, action) => {
      state.items = state.items.filter((t) => t.id !== action.payload);
      state.filteredItems = state.items;
    },
    setFilter: (state, action) => {
      state.filters = action.payload;
    },
    searchTasks: (state, action) => {
      const query = action.payload.toLowerCase();
      state.filteredItems = state.items.filter((t) =>
        t.text.toLowerCase().includes(query)
      );
    },
  },
});

export const { addTask, toggleTask, deleteTask, setFilter, searchTasks } =
  taskSlice.actions;
export default taskSlice.reducer;
