import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer, { fetchMissionsFromAPI } from './missions/missions';
import rocketsReducer from './rockets/rockets';

const rootReducer = combineReducers({
  missions: missionsReducer,
  rockets: rocketsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));
store.dispatch(fetchMissionsFromAPI());

export default store;
