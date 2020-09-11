import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = () => ({});

const renderList = ({
  state,
}) => (
  <div>
    <ul>
      {
                    state.books.map(book => (
                      <Book
                        key={book.id}
                        // eslint-disable-next-line react/jsx-props-no-spreading
                        {...book}
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
