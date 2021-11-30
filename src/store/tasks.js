const { createSlice } = require("@reduxjs/toolkit");

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: { tasks: [] },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push("new task");
    },
    seTaskStatus: (state, action) => {
      state.tasks[0].satus = "done";
    },
  },
});
