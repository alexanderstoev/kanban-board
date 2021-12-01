const { createSlice } = require("@reduxjs/toolkit");

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: { tasks: [] },
  reducers: {
    addTask: (state, action) => {
      // check if we have the tasks array created.
      // for some reason the initial state is undefined
      if (!state.tasks) {
        state.tasks = [];
      }
      state.tasks.push(action.payload);
    },
  },
});

// export actions
export const { addTask, setTaskStatus } = tasksSlice.actions;
