const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const CHANGE_FILTER = 'CHANGE_FILTER';

const randomId = () => Math.floor(Math.random() * Math.floor(50000));

export {
  CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER, randomId,
};
