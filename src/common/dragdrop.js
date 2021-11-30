import { seTaskStatus, store } from "../store/store";
/**
 *
 * @param {DragEvent} event
 */
export const drop = (event) => {
  store.dispatch(seTaskStatus());
  console.log(event);
};

/**
 *
 * @param {DragEvent} event
 */
export const dragStart = (event) => {
  event.target.classList.add("dragging");
  document.querySelectorAll(".droppable").forEach((elem) => {
    elem.classList.add("waiting");
  });
};

/**
 *
 * @param {DragEvent} event
 */
export const dragEnd = (event) => {
  event.target.classList.remove("dragging");
  event.target.classList.remove("active");
  document.querySelectorAll(".droppable").forEach((elem) => {
    elem.classList.remove("waiting");
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
