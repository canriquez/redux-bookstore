import 'regenerator-runtime';

const fetchApiBookList = async () => {
  const appURL = ['http://127.0.0.1:5000/api/v1/books/'];
  const request = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  try {
    const response = await fetch(appURL, request);
    const obj = await response.json();

    const result = obj.map(book => ({
      id: book.id,
      title: book.title,
      author: book.author,
      category: book.category,
    }));
    // return complete list
    return result;
  } catch (err) {
    throw ('Something went wrong with fetching book list ', err);
  }
};

const storeApiBook = async ({ title, author = '', category }) => {
  const postBook = JSON.stringify({
    title,
    author,
    category,
  });

  const appURL = ['http://127.0.0.1:5000/api/v1/books'];
  const request = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: postBook,
  };
  try {
    const response = await fetch(appURL, request);
    const result = await response.json();
    return result;
  } catch (err) {
    throw ('Something went wrong with storing book list ', err);
  }
};

const destroyApiBook = async ({ id }) => {
  const appURL = [`http://127.0.0.1:5000/api/v1/books/${id}`];
  const request = {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  try {
    const response = await fetch(appURL, request);
    // const result = await response.json();
    return response;
  } catch (err) {
    throw ('Something went wrong with destroying book ', err);
  }
};

export { fetchApiBookList, storeApiBook, destroyApiBook };
