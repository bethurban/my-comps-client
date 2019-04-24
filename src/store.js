import {
  createStore,
  compose,
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

const reducers = combineReducers({
  searches: searchesReducer
});
const middleware = [thunk];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  composeEnhancer(applyMiddleware(...middleware)),
);
