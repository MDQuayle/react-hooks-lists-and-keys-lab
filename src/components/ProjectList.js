import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  
  console.log(projects)
  let projectCounter = 1
  const newProject = projects.map((project) => {
    return <div key={projectCounter++}><h2>{project.name}</h2>
            <p>{project.about}</p>
            <p>{project.technologies}</p></div>});
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {newProject}
      </div>
    </div>
  );
}

export default ProjectList;
