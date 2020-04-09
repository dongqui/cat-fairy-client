import { TokenApiActionTypes } from '../saga/token';
import { action } from './helper';

export const TOKEN_FETCH = 'token/TOKEN_FETCH' as const;
export const TOKEN_REQUEST = 'token/TOKEN_REQUEST' as const;
export const TOKEN_SUCCESS = 'token/TOKEN_SUCCESS' as const;
export const TOKEN_FAILURE = 'token/TOKEN_FAILURE' as const;

export const fetchToken = action(TOKEN_FETCH);

interface ITokenState {
  token: string
}
const initState: ITokenState = {
  token: '',
}
const reducer = (state: ITokenState = initState, action: TokenApiActionTypes) => {
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