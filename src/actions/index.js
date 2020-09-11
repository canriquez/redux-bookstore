import { CREATE_BOOK, REMOVE_BOOK } from '../helpers/help'

const addBook = (book) => {
  return {
    type: CREATE_BOOK,
    id: book.id,
    title: book.title,
    category: book.category,
  }
};

const removeBook = (book) => {
  return {
    type: REMOVE_BOOK,
    id: book.id,
  }
};

export { addBook, removeBook }