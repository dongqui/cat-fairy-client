import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import auth from './auth';
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import createHistory from 'history/createBrowserHistory';

type RootState = ReturnType<typeof rootReducer>
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const history = createHistory();
export const rootReducer = combineReducers({
  auth,
  router: connectRouter(history),
})