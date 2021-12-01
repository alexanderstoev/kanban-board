import React from "react";

import { dragStart } from "../common/dragdrop";

import "./Task.css";

export default function Task({ task }) {
  return (
    <div
      data-task-id={task.id}
      className="task"
      draggable="true"
      onDragStart={dragStart}>
      <h4 className="task-title">{task.title}</h4>
      <p className="task-theme">{task.theme}</p>
    </div>
  );
}
