import { TokenApiActionTypes } from '../saga/auth';
import { action } from './helper';

export const TOKEN_FETCH = 'auth/TOKEN_FETCH' as const;
export const TOKEN_REQUEST = 'auth/TOKEN_REQUEST' as const;
export const TOKEN_SUCCESS = 'auth/TOKEN_SUCCESS' as const;
export const TOKEN_FAILURE = 'auth/TOKEN_FAILURE' as const;

export const fetchToken = action(TOKEN_FETCH);

interface IAuthState {
  user: {
    username: string,
    email: string,
    token: string
  } | null
}
const initState: IAuthState = {
  user: null
}
const reducer = (state: IAuthState = initState, action: TokenApiActionTypes) => {
  const { type, payload } = action;
  switch (type) {
    case TOKEN_REQUEST:
    case TOKEN_SUCCESS:
      return {
        ...initState,
        ...payload
      }
    case TOKEN_FAILURE:
    default:
      return state;
  }
}

export default reducer;