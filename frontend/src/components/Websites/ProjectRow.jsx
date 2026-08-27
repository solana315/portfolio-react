// components/Websites/ProjectRow.jsx
import React from 'react';

function ProjectRow({ project }) {
  const { id, tag, tagColor, title, description, meta, year, url, image } = project;

  const content = (
    <>
      <div className="project-number-col d-none d-lg-flex">
        <span className="project-number">{id}</span>
      </div>

      <div className="project-collage-col">
        <span className={`collage-tag tag-${tagColor}`}>{tag}</span>
        {image ? (
          <img src={image} alt={title} className="project-image" />
        ) : (
          <div className="collage-strip strip-tan"></div>
        )}
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
    </>
  );

  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className="project-row project-row-link">
        {content}
      </a>
    );
  }

  return <div className="project-row">{content}</div>;
}

export default ProjectRow;