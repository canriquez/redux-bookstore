/* eslint-disable jsx-a11y/anchor-is-valid */ 
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
      <h2>Author here</h2>
    </div>
    <div>
      <a divef='#'>Comments</a>
      {' '}
      <a divef='#' onClick={() => handleRemoveBook(book)}>Remove Book</a>
      {' '}
      <a divef='#'>Comments</a>
    </div>
    <div>
      <div className='Oval-2'></div>
      <h1 className='-Percent-Complete'>64%</h1>
      <p className='Completed'>Completed</p>
    </div>
    <div className='Lesson-Panel'></div>
    <div>
      <p className=''>Current chapter</p>
      <p className=''>Chapter 17</p>
      <button className=''>update progress</button>
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
