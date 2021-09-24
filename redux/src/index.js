import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {createStore} from 'redux'
import allReducer from './reducers'
import {Provider} from 'react-redux';

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store = {store}>
  <App />
  </Provider>,
  document.getElementById('root')
);


/*
//STATE
import { createStore } from 'redux';

//ACTION
const increment = () => {
  return {
    type: "INCREMENT"
  }
}

const decrement = () => {
  return {
    type: "DECREMENT"
  }
}


//REDUCER
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      console.log("From Reducer - Inc")
      return state + 1;
    case "DECREMENT":
      console.log("From Reducer - Dec")
      return state - 1;
    default:
      console.log("From Reducer - Def")
      break;
  }
}

let store = createStore(counter);

store.subscribe(() => console.log(store.getState()))

//DISPATCH
store.dispatch(increment());
store.dispatch(decrement());


ReactDOM.render(
  <App />,
  document.getElementById('root')
);


*/
