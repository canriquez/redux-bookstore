import { combineReducers } from 'redux';
import books from './books';
import filter from './filter';
// rootReducer
/*
const rootReducer = combineReducers({
    books,
});
 */
export default combineReducers({
  books,
  filter,
});
