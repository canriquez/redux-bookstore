import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { removeBook } from '../actions/index';

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispach => ({
  handleRemoveBook: book => {
    dispach(removeBook(book));
  },
});

/* const mapDispatchToProps = () => ({});
 */
const renderList = ({
  state,
  handleRemoveBook,
}) => (
  <div>
    <CategoryFilter />
    <ul>
      {
          state.books.map(book => (
            <Book
              key={book.id}
              id={book.id}
              // eslint-disable-next-line react/jsx-props-no-spreading
              book={book}
              handleRemoveBook={handleRemoveBook}
            />
          ))
        }

    </ul>
  </div>
);

const BooksList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(renderList);

export default BooksList;
