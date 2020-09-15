import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import thunk from 'redux-thunk';
import App from './components/App';
import rootReducer from './reducers/index';
import './index.css';


/* const handleAsync = () => {
  return (dispatch) => {
    console.log('injecting think for async calls')
  }
} */


const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
