// components/Design/ScrapbookPhoto.jsx
import React from 'react';

function ScrapbookPhoto({ src, alt, rotate = 0, circled = false, caption }) {
  return (
    <div className="scrap-photo" style={{ '--rotate': `${rotate}deg` }}>
      <img src={src} alt={alt} />
      {circled && <div className="scrap-circle"></div>}
      {caption && <span className="scrap-photo-caption">{caption}</span>}
    </div>
  );
}

export default ScrapbookPhoto;