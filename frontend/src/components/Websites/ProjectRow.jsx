// components/Websites/ProjectRow.jsx
import React from 'react';

function ProjectRow({ project }) {
  const { id, tag, tagColor, title, description, meta, year } = project;

  return (
    <div className="project-row row align-items-stretch mb-4">
      <div className="col-lg-1 d-none d-lg-flex align-items-start">
        <span className="project-number">{id}</span>
      </div>

      <div className="col-lg-6">
        <div className="project-collage">
          <span className={`collage-tag tag-${tagColor}`}>{tag}</span>

          <div className="collage-strip strip-tan"></div>
        </div>
      </div>

      <div className="col-lg-5 d-flex flex-column justify-content-center project-info">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
        <hr className="project-hr" />
        <div className="d-flex justify-content-between project-meta">
          <span>{meta}</span>
          <span>{year}</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectRow;