import { TokenApiActionTypes, LoginApiActionTypes } from '../saga/auth';
import { action } from './helper';

export const TOKEN_FETCH = 'auth/TOKEN_FETCH' as const;
export const TOKEN_REQUEST = 'auth/TOKEN_REQUEST' as const;
export const TOKEN_SUCCESS = 'auth/TOKEN_SUCCESS' as const;
export const TOKEN_FAILURE = 'auth/TOKEN_FAILURE' as const;
export const fetchToken = action(TOKEN_FETCH);

export const LOGIN = 'auth/LOGIN' as const;
export const LOGIN_REQUEST = 'auth/LOGIN_REQUEST' as const;
export const LOGIN_SUCCESS = 'auth/LOGIN_REQUEST' as const;
export const LOGIN_FAILURE = 'auth/LOGIN_REQUEST' as const;
export const login = action(LOGIN);

interface IAuthState {
  user: {
    username: string,
    email: string,
    token: string
  } | null,
  
}
const initState: IAuthState = {
  user: null,
}
const reducer = (state: IAuthState = initState, action: TokenApiActionTypes | LoginApiActionTypes) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
    case TOKEN_SUCCESS:
      return {
        ...initState,
        ...payload
      }
    case LOGIN_FAILURE:
    case TOKEN_FAILURE:
    default:
      return state;
  }
}

export default reducer;