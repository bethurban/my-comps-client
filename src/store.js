import {
  createStore,
  compose,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import homes from './reducers/homes';
import homeFormData from './reducers/homeFormData';
import searches from './reducers/searches';
import searchFormData from './reducers/searchFormData';

const reducers = combineReducers({
  homes,
  homeFormData,
  searches,
  searchFormData
});
const middleware = [thunk];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  composeEnhancer(applyMiddleware(...middleware)),
);
