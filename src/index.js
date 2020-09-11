import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import rootReducer from './reducers/index';
import books from './reducers/books';

const Main = () => (
  <div>
    <App />
  </div>
);

ReactDOM.render(
<Provider store={createStore(books)}>
  <Main />
</Provider>
, document.getElementById('root'));
