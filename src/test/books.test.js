import deepFreeze from 'deep-freeze';
import books from '../reducers/books';
import { addBook, removeBook, updateBookList } from '../actions/index';

it('test addBook action', () => {
  const stateBefore = [];
  const book = {
    id: 345,
    category: 'science',
    title: 'the title',
  };

  const stateAfter = [
    {
      id: 345,
      category: 'science',
      title: 'the title',
    },
  ];

  /* inmmutability check */
  deepFreeze(stateBefore); // makes sure reducer is pure function
  deepFreeze(addBook); // makes sure reducer is pure function

  expect(
    books(stateBefore, addBook(book)),
  ).toEqual(stateAfter);
});

it('test removeBook action', () => {
  const stateBefore = [
    {
      id: 345,
      category: 'science',
      title: 'the title',
    },
  ];
  const book = {
    id: 345,
    category: 'science',
    title: 'the title',
  };

  const stateAfter = [];

  /* inmmutability check */
  deepFreeze(stateBefore); // makes sure reducer is pure function
  deepFreeze(removeBook); // makes sure reducer is pure function

  expect(
    books(stateBefore, removeBook(book)),
  ).toEqual(stateAfter);
});

it('test updates book_list in full', () => {
  const stateBefore = [
    {
      id: 345,
      category: 'science',
      title: 'the title',
    },
  ];
  const bookList = [
    {
      id: 345,
      category: 'science',
      title: 'the title 1',
    },
    {
      id: 346,
      category: 'science',
      title: 'the title 2',
    },
  ];

  const stateAfter = bookList;

  /* inmmutability check */
  deepFreeze(stateBefore); // makes sure reducer is pure function
  deepFreeze(removeBook); // makes sure reducer is pure function

  expect(
    books(stateBefore, updateBookList(bookList)),
  ).toEqual(stateAfter);
});
