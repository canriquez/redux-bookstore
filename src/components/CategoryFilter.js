import React from 'react';
// import { PropTypes } from 'prop-types';

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

const CategoryFilter = () => (
  <div>
    <select name="filter" id="filter" >
      {
        categories.map((cat, id) => (
          <option key={`opt_${id * 2}`} value={id}>{cat}</option>
        ))
      }
    </select>
  </div>
);

export default CategoryFilter;