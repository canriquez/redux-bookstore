import {
  CREATE_BOOK, REMOVE_BOOK, UPDATE_BOOK_LIST,
} from '../helpers/help';

const books = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          category: action.category,
        },
      ];
    case REMOVE_BOOK:
      // eslint-disable-next-line
      const newState = [];
      state.map(item => (item.id !== action.id ? newState.push(item) : []));
      return newState;

    case UPDATE_BOOK_LIST:
      // eslint-disable-next-line
      return [
        ...action.bookList,
      ];

    default:
      return state;
  }
};

export default books;
