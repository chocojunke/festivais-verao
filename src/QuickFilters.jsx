import React from 'react';
import './css/QuickFilters.css'; // Import your CSS file for styling

const QuickFilters = () => {
  return (
    <div className="quick-filters">
      <button className="filter-btn">All</button>
      <button className="filter-btn">Favorites</button>
      <button className="filter-btn">Recent</button>
      <button className="filter-btn">Archived</button>
    </div>
  );
};

export default QuickFilters;