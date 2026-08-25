// components/Websites/ProjectList.jsx
import React from 'react';
import ProjectRow from './ProjectRow'; 

function ProjectList({ projects }) {
  return (
    <section className="container pb-5">
      {projects.map((project) => (
        <ProjectRow key={project.id} project={project} />
      ))}
    </section>
  );
}

export default ProjectList;