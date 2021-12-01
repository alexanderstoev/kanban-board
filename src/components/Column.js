import React from "react";
import Task from "./Task";

import "./Column.css";
import "./dragdrop.css";
import { dragEnter, dragLeave, dragOver, drop } from "../common/dragdrop";
import { useTranslation } from "react-i18next";

export default function Column({ status, tasks }) {
  const { t } = useTranslation();

  return (
    <div
      data-status={status}
      className="column droppable "
      onDrop={drop}
      onDragEnter={dragEnter}
      onDragOver={dragOver}
      onDragLeave={dragLeave}>
      <h3>{t(status)}</h3>
      {tasks.map((task) => (
        <Task task={task} key={task.id} />
      ))}
    </div>
  );
}
