import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';

const searchesReducer  = (state = [], action) => {
  switch(action.type) {
    case 'GET_SEARCHES_SUCCESS':
      return action.searches;
    default:
      return state;
  }
}

let searches = searchesReducer();
console.log(search) = []
