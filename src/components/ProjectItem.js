import React from "react";
function ProjectItem({ name, about, technologies }) {
  let techCounter = 1
  const technolgyElement = technologies.map((technology) => {
    return <span key={techCounter++}>{technology}</span>});
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technolgyElement}
      </div>
    </div>
  );
}

export default ProjectItem;
