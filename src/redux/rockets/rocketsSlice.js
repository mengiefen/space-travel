import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer, { fetchMissionsFromAPI } from '../missions/missions';
import rocketsReducer from './rockets';

const rootReducer = combineReducers({
  rockets: rocketsReducer,
  missionsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));
store.dispatch(fetchMissionsFromAPI());

export default store;
