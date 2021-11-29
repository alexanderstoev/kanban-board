import React from "react";

import { dragEnd, dragStart } from "../common/dragdrop";

import "./Task.css";
// import "./dragdrop.css";

export default function Task() {
  return (
    <div
      className="task"
      draggable="true"
      onDragStart={dragStart}
      onDragEnd={dragEnd}>
      <h4 className="task-name">Task name</h4>
      <p className="task-theme">task theme</p>
    </div>
  );
}
