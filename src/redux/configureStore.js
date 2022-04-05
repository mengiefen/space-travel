import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import missionsReducer from './missions/missions';

const rootReducer = combineReducers({ missionsReducer });
const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(getBooksFromAPI());

export default store;