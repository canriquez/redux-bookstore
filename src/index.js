import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';

const Main = () => (
  <div>
    <App />
  </div>
);

const store = createStore(rootReducer);
//console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>
  , document.getElementById('root'));
