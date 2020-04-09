import { take, fork } from 'redux-saga/effects';
import { getTokenApi } from '../api/index';
import { createApiActions, fetchEntity, ApiActionTypes } from './helper';
import { TOKEN_REQUEST, TOKEN_SUCCESS, TOKEN_FAILURE, TOKEN_FETCH } from '../modules/token';


export const tokenApiActions = createApiActions(
  TOKEN_REQUEST, TOKEN_SUCCESS, TOKEN_FAILURE
)(getTokenApi);

export type TokenApiActionTypes = ApiActionTypes<typeof tokenApiActions>;

const fetchToken = fetchEntity(tokenApiActions, getTokenApi)

export function *watchRequestToken() {
  const { code } = yield take(TOKEN_FETCH);
  console.log(code);
  yield fork(fetchToken, code); 
}