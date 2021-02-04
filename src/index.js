import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

//redux thunk : Async middleware for Redux (to make API call)

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

//above the create store is taking in two arguments
//a reducer
// and a enhancer: it is used to specify it to enhance the store
// with third party capabilities such as middleware, time travel, 
//persistence, etc.
// The only store enhancer that ships with redux is applyMiddleware()

    render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);