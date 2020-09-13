import React from 'react';
import { PropTypes } from 'prop-types';

const Book = ({
  book,
  handleRemoveBook,
}) => (

  <li>
    <div>
      <h3>{book.category}</h3>
      <h1>{book.title}</h1>
      <p>{book.id}</p>
    </div>
    <div>
      <button type="button" onClick={() => handleRemoveBook(book)}>Remove Book</button>
    </div>
  </li>

);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
