import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

const App = () => (
  <div className="panel">
    <div className="panel-bg">
      <span className="title-header">Bookstore CMS</span>
      <p className="books">books</p>
      <p />
      <i className="login" />
    </div>
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
