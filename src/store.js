import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducer from 'reducers/rootReducers';
import projects from './initialState.json';

export default createStore(reducer, { projects }, applyMiddleware(ReduxThunk));
