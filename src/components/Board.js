import React from "react";
import Column from "./Column";
import ProjectHeader from "./ProjectHeader";

import "./Board.css";

export default function Board() {
  return (
    <div className="project-board">
      <ProjectHeader />
      <div className="board">
        <Column type="To do" />
        <Column type="Blocked" />
        <Column type="In Progress" />
        <Column type="Done" />
      </div>
    </div>
  );
}
