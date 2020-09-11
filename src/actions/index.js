const addBook = (book) => {
  return {
    type: 'CREATE_BOOK',
    id: book.id,
    title: book.title,
    category: book.category,
  }
};

const removeBook = (book) => {
  return {
    type: 'REMOVE_BOOK',
    id: book.id,
  }
};