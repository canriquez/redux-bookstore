import {
  CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER, UPDATE_BOOK_LIST,
  GET_BOOKLIST, RECIEVED_DATA, STORE_BOOK, DELETE_BOOK
} from '../helpers/help';
import { fetchApiBookList, storeApiBook, destroyApiBook } from '../apis/ApiBooks'



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
  bookList: bookList,
});

const changeFilter = filter => ({
  type: CHANGE_FILTER,
  filter,
});

/* Action creators for API calls */

const getBookListApi = () => ({
  type: GET_BOOKLIST
});

/* Thunk creators  */

const getApiBookList = () => {
  return (dispatch) => {
    console.log('get book list - fetch API here')
    fetchApiBookList().then((result) => {
      console.log(result)
      dispatch(updateBookList(result))
    })
  }
}

/* const deleteApiBook = (book) => {
  return (dispatch) => {
    console.log('destroy book - fetch API here')
    destroyApiBook(book).then(() => {
      fetchApiBookList().then((result) => {
        console.log(result)
        dispatch(updateBookList(result))
      })
    });
  }
} */


const deleteApiBook = (book) => {
  return (dispatch) => {
    return destroyApiBook(book)
      .then(response=> {
        fetchApiBookList().then((result) => {
          console.log(result)
          dispatch(updateBookList(result))
          return result;
        }).catch(error => {
            throw (error)
          });
      })
      .catch(error => {
        throw (error)
      });
  };
};


/* const createApiBook = (book) => {
  return (dispatch) => {
    console.log('create book  - fetch API here')
    storeApiBook(book);
  }
} */

//const createApiBook = book => (dispatch, getState) => Promise.resolve().then(() => {
  //const { someReducer } = getState();
 // console.log('just in createApiBook')
 // storeApiBook(book);
/*   return (dispatch) => {
    console.log('create book  - fetch API here')
    storeApiBook(book);
  } */
//});

const createApiBook = (book) => {
  return (dispatch) => {
    return storeApiBook(book)
      .then(response=> {
        return response;
      })
      .catch(error => {
        throw (error)
      });
  };
};


export {
  addBook, removeBook, updateBookList, changeFilter,
  getBookListApi, getApiBookList, deleteApiBook, createApiBook
};
