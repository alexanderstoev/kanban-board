import { store } from "../store/store";
import { setTaskStatus } from "../store/tasks";

/**
 *
 * @param {DragEvent} event
 */
export const drop = (event) => {
  const taskId = event.dataTransfer.getData("text/plain");
  let newStatus;

  // check if we've dropped on column or a task
  if (event.target.classList.contains("droppable")) {
    newStatus = event.target.dataset.status;
  } else {
    newStatus = event.target.closest(".droppable").dataset.status;
  }

  // update the state
  store.dispatch(setTaskStatus({ taskId, newStatus }));

  // cleanup classes for the UI
  document.querySelectorAll(".droppable").forEach((elem) => {
    elem.classList.remove("waiting");
  });
  document.querySelectorAll(".dragging").forEach((elem) => {
    elem.classList.remove("dragging");
  });
  document.querySelectorAll(".active").forEach((elem) => {
    elem.classList.remove("active");
  });
};

/**
 *
 * @param {DragEvent} event
 */
export const dragStart = (event) => {
  event.dataTransfer.setData("text/plain", event.target.dataset.taskId);
  event.target.classList.add("dragging");
  document.querySelectorAll(".droppable").forEach((elem) => {
    elem.classList.add("waiting");
  });
};

/**
 *
 * @param {DragEvent} event
 */
export const dragEnter = (event) => {
  event.preventDefault();
  if (event.target.classList.contains("droppable")) {
    event.target.classList.add("active");
  }
};
/**
 *
 * @param {DragEvent} event
 */
export const dragOver = (event) => {
  event.preventDefault();
};

/**
 *
 * @param {DragEvent} event
 */
export const dragLeave = (event) => {
  if (event.target.classList.contains("droppable")) {
    event.target.classList.remove("active");
  }
};
