import { createStore } from 'redux';
import createHistory from 'history/createBrowserHistory';
import rootReducer from'./reducers/index';

export const history = createHistory();
export const store = createStore(rootReducer(history));
 