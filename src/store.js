import {
  createStore,
  compose,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import homes from './reducers/homes';
import homeFormData from './reducers/homeFormData';

const reducers = combineReducers({
  homes,
  homeFormData
});
const middleware = [thunk];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  composeEnhancer(applyMiddleware(...middleware)),
);
