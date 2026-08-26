// components/Websites/ProjectRow.jsx
import React from 'react';

function ProjectRow({ project }) {
  const { id, tag, tagColor, title, description, meta, year } = project;

  return (
    <div className="project-row">
      <div className="project-number-col d-none d-lg-flex">
        <span className="project-number">{id}</span>
      </div>

      <div className="project-collage-col">
        <span className={`collage-tag tag-${tagColor}`}>{tag}</span>
        <div className="collage-strip strip-tan"></div>
      </div>

      <div className="project-info-col">
        <hr className="rule-top" />

        <div className="info-body">
          <h2 className="project-title">{title}</h2>
          <p className="project-description">{description}</p>
        </div>

        <div className="info-footer">
          <hr className="rule-bottom" />
          <div className="d-flex justify-content-between project-meta">
            <span>{meta}</span>
            <span>{year}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectRow;