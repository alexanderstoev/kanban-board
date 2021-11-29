import React from "react";
import Task from "./Task";

import "./Column.css";
import "./dragdrop.css";
import { dragEnter, dragLeave, dragOver, drop } from "../common/dragdrop";

export default function Column({ type }) {
  return (
    <div
      className="column droppable "
      onDrop={drop}
      onDragEnter={dragEnter}
      onDragOver={dragOver}
      onDragLeave={dragLeave}>
      <h3>{type}</h3>
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </div>
  );
}
