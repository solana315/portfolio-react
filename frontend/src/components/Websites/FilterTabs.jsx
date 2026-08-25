// components/FilterTabs.jsx
import React from 'react';

function FilterTabs({ filters, activeFilter, onFilterChange }) {
  return (
    <>
      <div className="d-flex gap-4 websites-filters mt-5">
        {filters.map((f) => (
          <button
            key={f}
            className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
            onClick={() => onFilterChange(f)}
          >
            {f}
          </button>
        ))}
      </div>
      <hr className="websites-divider" />
    </>
  );
}

export default FilterTabs;