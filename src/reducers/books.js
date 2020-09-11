import { CREATE_BOOK, REMOVE_BOOK } from '../helpers/help';

const randomId = () => Math.floor(Math.random() * Math.floor(50000));

const booksList = [
  {
    id: randomId(),
    category: 'Horror',
    title: 'The Psycho Thriller',
  },
  {
    id: randomId(),
    category: 'History',
    title: 'Mine Craft - Adolf Hittler',
  },
  {
    id: randomId(),
    category: 'Learning',
    title: 'Tools of Titans',
  },
];

const books = (state = booksList, action) => {
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
      // eslint-disable-next-line no-case-declarations
      const newState = [];
      state.map(item => (item.id !== action.id ? newState.push(item) : []));
      return newState;
    default:
      return state;
  }
};

export default books;
