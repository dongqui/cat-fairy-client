import { take, fork } from 'redux-saga/effects';
import { getTokenApi, loginApi, setTokenOnAxiosHeader } from '../api/index';
import { createApiActions, fetchEntity, ApiActionTypes } from './helper';
import { TOKEN_REQUEST, TOKEN_SUCCESS, TOKEN_FAILURE, TOKEN_FETCH, 
    LOGIN, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../modules/auth';



// ---------------------------- TOKEN --------------------------
export const tokenApiActions = createApiActions(
  TOKEN_REQUEST, TOKEN_SUCCESS, TOKEN_FAILURE
)(getTokenApi);

export type TokenApiActionTypes = ApiActionTypes<typeof tokenApiActions>;

const tokenEntity = fetchEntity(tokenApiActions, getTokenApi)
export function *watchRequestToken() {
  const { payload: { code }} = yield take(TOKEN_FETCH);
  yield fork(tokenEntity, code); 
}


// ---------------------------- LOGIN --------------------------
export const loginApiActions = createApiActions(
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE
)(loginApi)

export type LoginApiActionTypes = ApiActionTypes<typeof loginApiActions>;
const loginEntity = fetchEntity(loginApiActions, loginApi);

export function *watchLogin() {
  const { payload: { token }} = yield take(LOGIN);
  setTokenOnAxiosHeader(token);
  yield fork(loginEntity, token);
}

