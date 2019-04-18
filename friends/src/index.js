import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware, compose } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import logger from 'redux-logger';


import reducer from './reducers'
import App from './App';
// import * as serviceWorker from './serviceWorker';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({

    })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, logger)); // added from Swapi

// const store = createStore(reducer, applyMiddleware(thunk)) // original
const store = createStore(reducer,enhancer); // added from Swapi

window.reduxStore = store
const rootElement = document.getElementById("root")
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)




// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
