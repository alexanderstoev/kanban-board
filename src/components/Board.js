import React from "react";
import Column from "./Column";
import ProjectHeader from "./ProjectHeader";

import {
  STATUS_TODO,
  STATUS_DONE,
  STATUS_IN_PROGRESS,
  STATUS_BLOCKED,
} from "../common/constants";

import "./Board.css";
import AddTask from "./AddTask";

export default function Board() {
  return (
    <div className="project-board">
      <ProjectHeader />
      <AddTask />
      <div className="board">
        <Column type={STATUS_TODO} />
        <Column type={STATUS_BLOCKED} />
        <Column type={STATUS_IN_PROGRESS} />
        <Column type={STATUS_DONE} />
      </div>
    </div>
  );
}
