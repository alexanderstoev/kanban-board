import React from "react";

import "./ProjectHeader.css";

export default function ProjectHeader() {
  return (
    <div className="project-header">
      <div className="project-name">Project name</div>
      <div className="project-description">
        The project description. What is the purpose of the project and why it
        is needed to be implemented.
      </div>
      <div className="project-stats">
        <ul>
          <li>
            <span className="label">Open tasks:</span> 34
          </li>
          <li>
            <span className="label">Done tasks:</span> 86
          </li>
          <li>
            <span className="label">Blocked tasks:</span> 2
          </li>
          <li>
            <span className="label">Total tasks:</span> 122
          </li>
        </ul>
      </div>
    </div>
  );
}
