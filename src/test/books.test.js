import deepFreeze from 'deep-freeze';
import books from '../reducers/books';
import { addBook } from '../actions/index';

it('test books reducer', () => {
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
