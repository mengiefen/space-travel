import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketsReducer from './rockets';

const rootReducer = combineReducers({
  rockets: rocketsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
