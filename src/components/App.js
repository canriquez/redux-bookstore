import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

const App = () => (
  <div className='Bookstore-CMS'>
    <div className='panel-bg'>
      <span className='title-header'>Bookstore CMS</span>
      <p>books</p>
      <p></p>
      <i></i>
    </div>
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
