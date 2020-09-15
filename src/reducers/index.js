import { combineReducers } from 'redux';
import books from './books';
import filter from './filter';
import booksApi from './booksApi'


// rootReducer

export default combineReducers({
  books,
  filter,
  booksApi,

});
