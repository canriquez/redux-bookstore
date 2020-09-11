import { CREATE_BOOK, REMOVE_BOOK } from '../helpers/help';

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

export { addBook, removeBook };
