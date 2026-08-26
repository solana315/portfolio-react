// components/Design/ScrapbookNote.jsx
import React from 'react';

function ScrapbookNote({ children, rotate = 0, size = 'md' }) {
  return (
    <p
      className={`scrap-note scrap-note-${size}`}
      style={{ '--rotate': `${rotate}deg` }}
    >
      {children}
    </p>
  );
}

export default ScrapbookNote;