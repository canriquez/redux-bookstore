import {
  CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER, UPDATE_BOOK_LIST,
  GET_BOOKLIST,
} from '../helpers/help';
import { fetchApiBookList, storeApiBook, destroyApiBook } from '../apis/ApiBooks';

const addBook = book => ({
  type: CREATE_BOOK,
  id: book.id,
  title: book.title,
  category: book.category,
});

const removeBook = book => ({
  type: REMOVE_BOOK,
  id: book.id,
});

const updateBookList = bookList => ({
  type: UPDATE_BOOK_LIST,
  bookList,
});

const changeFilter = filter => ({
  type: CHANGE_FILTER,
  filter,
});

/* Action creators for API calls */

const getBookListApi = () => ({
  type: GET_BOOKLIST,
});

/* Thunk thenable creators  */

const getApiBookList = () => dispatch => {
  fetchApiBookList().then(result => {
    dispatch(updateBookList(result));
  });
};

const deleteApiBook = book => dispatch => destroyApiBook(book)
  .then(() => {
    fetchApiBookList().then(result => {
      dispatch(updateBookList(result));
      return result;
    }).catch(error => {
      throw (error);
    });
  })
  .catch(error => {
    throw (error);
  });
// eslint-disable-next-line
const createApiBook = book => dispatch => storeApiBook(book)
  .then(response => response)
  .catch(error => {
    throw (error);
  });

export {
  addBook, removeBook, updateBookList, changeFilter,
  getBookListApi, getApiBookList, deleteApiBook, createApiBook,
};
