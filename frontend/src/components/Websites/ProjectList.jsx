// components/Websites/ProjectList.jsx
import React from 'react';
import ProjectRow from './ProjectRow';

function ProjectList({ projects }) {
  return (
    <section className="project-list">
      {projects.map((project) => (
        <ProjectRow key={project.id} project={project} />
      ))}
    </section>
  );
}

export default ProjectList;