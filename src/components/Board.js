import React from "react";
import { useSelector } from "react-redux";

import Column from "./Column";
import ProjectHeader from "./ProjectHeader";
import AddTask from "./AddTask";

import {
  selectBlockedTasks,
  selectDoneTasks,
  selectInProgressTasks,
  selectTodoTasks,
} from "../store/tasks";

import {
  STATUS_TODO,
  STATUS_DONE,
  STATUS_IN_PROGRESS,
  STATUS_BLOCKED,
} from "../common/constants";

import "./Board.css";

export default function Board() {
  const todoTasks = useSelector(selectTodoTasks);
  const blockedTasks = useSelector(selectBlockedTasks);
  const inProgressTasks = useSelector(selectInProgressTasks);
  const doneTasks = useSelector(selectDoneTasks);

  return (
    <div className="project-board">
      <ProjectHeader />
      <AddTask />
      <div className="board">
        <Column status={STATUS_TODO} tasks={todoTasks} />
        <Column status={STATUS_BLOCKED} tasks={blockedTasks} />
        <Column status={STATUS_IN_PROGRESS} tasks={inProgressTasks} />
        <Column status={STATUS_DONE} tasks={doneTasks} />
      </div>
    </div>
  );
}
