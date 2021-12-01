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
import {
  selectBlockedTasks,
  selectDoneTasks,
  selectInProgressTasks,
  selectTodoTasks,
} from "../store/tasks";
import { useSelector } from "react-redux";

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
        <Column type={STATUS_TODO} tasks={todoTasks} />
        <Column type={STATUS_BLOCKED} tasks={blockedTasks} />
        <Column type={STATUS_IN_PROGRESS} tasks={inProgressTasks} />
        <Column type={STATUS_DONE} tasks={doneTasks} />
      </div>
    </div>
  );
}
