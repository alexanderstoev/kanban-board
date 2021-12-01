import {
  STATUS_BLOCKED,
  STATUS_DONE,
  STATUS_IN_PROGRESS,
  STATUS_TODO,
} from "../common/constants";

const { createSlice, createSelector } = require("@reduxjs/toolkit");

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

const selectAllTasks = (state) => {
  return state.tasks || []; // if we don't have any tasks so far return an empty array
};

export const selectTodoTasks = createSelector(selectAllTasks, (tasks) => {
  return tasks.filter((elem) => elem.status === STATUS_TODO);
});

export const selectBlockedTasks = createSelector(selectAllTasks, (tasks) => {
  return tasks.filter((elem) => elem.status === STATUS_BLOCKED);
});

export const selectInProgressTasks = createSelector(selectAllTasks, (tasks) => {
  return tasks.filter((elem) => elem.status === STATUS_IN_PROGRESS);
});

export const selectDoneTasks = createSelector(selectAllTasks, (tasks) => {
  return tasks.filter((elem) => elem.status === STATUS_DONE);
});
