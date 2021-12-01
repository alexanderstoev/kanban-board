import { configureStore } from "@reduxjs/toolkit";
import { tasksSlice } from "./tasks";

// local storage item key
const LOCAL_STORAGE = "kanban-tasks";

// load the state from the local storage
const loadState = () => {
  const serializedState = localStorage.getItem(LOCAL_STORAGE);
  if (!serializedState) return {}; // if nothing in the localstorage - return empty object
  return JSON.parse(serializedState);
};

// export store
export const store = configureStore({
  reducer: tasksSlice.reducer,
  preloadedState: loadState(),
});

// persist the store in the local storage
store.subscribe(() => {
  localStorage.setItem(LOCAL_STORAGE, JSON.stringify(store.getState()));
});
