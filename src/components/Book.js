import React from 'react';
import { PropTypes } from 'prop-types';

const Book = ({
  category,
  title,
}) => (

  <li>
    <div>
      <h3>{category}</h3>
      <h1>{title}</h1>
    </div>
    <div>
      <button type="button">Delete Book</button>
    </div>
  </li>

);

Book.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Book;
