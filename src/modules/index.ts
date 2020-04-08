import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import token from './token';
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import createHistory from 'history/createBrowserHistory';


type RootState = ReturnType<typeof rootReducer>
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;


export const action = <T, P>(type: T) => (payload: P) => {
  return { type, payload } 
}

export const history = createHistory();
export const rootReducer = combineReducers({
  token,
  router: connectRouter(history),
})