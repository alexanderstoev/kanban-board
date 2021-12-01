import React from "react";

import { dragEnd, dragStart } from "../common/dragdrop";

import "./Task.css";
// import "./dragdrop.css";

export default function Task({ task }) {
  return (
    <div
      className="task"
      draggable="true"
      onDragStart={dragStart}
      onDragEnd={dragEnd}>
      <h4 className="task-title">{task.title}</h4>
      <p className="task-theme">{task.theme}</p>
    </div>
  );
}
