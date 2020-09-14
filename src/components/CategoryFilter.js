import React from 'react';
import { PropTypes } from 'prop-types';

const CategoryFilter = ({
  handleFilterChange,
}) => {
  const categories = [
    'All',
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  const handleChange = e => {
    handleFilterChange(categories[e.target.value]);
    console.log(categories[e.target.value]);
  };

  return (

    <div>
      <select name="filter" id="filter" onChange={handleChange}>
        {
          categories.map((cat, id) => (
            <option key={`opt_${id * 2}`} value={id}>{cat}</option>
          ))
        }
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;