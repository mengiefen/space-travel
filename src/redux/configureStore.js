import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer, { fetchMissionsFromAPI } from './missions/missions';

const reducer = combineReducers({
  missionsReducer,
  // rocketsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));
store.dispatch(fetchMissionsFromAPI());

export default store;
