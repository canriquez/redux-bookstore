import React from 'react';
import { PropTypes } from 'prop-types';

const Book = ({
  book,
  handleRemoveBook
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
  /*   category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired, */
  book: PropTypes.object.isRequired
};

export default Book;
