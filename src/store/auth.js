import { call, put } from "redux-saga/effects";
import { FireAuth, githubAuthProvider } from "../firebase";
import { action } from "./helper";

export const LOGIN_WITH_GITHUB = 'LOGIN_WITH_GITHUB';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED  = 'LOGIN_FAILED';


export function loginWithGithub(email, password) {
  return action(LOGIN_WITH_GITHUB, { email, password })
}

function loginSuccess(user) {
  return action(LOGIN_SUCCESS, { user });
}

function loginFailed(error) {
  return action(LOGIN_FAILED, { error });
}

export function* signInWithRedirect() {
  try {
    //TODO: signInWithRedirect 사용
    const user = yield call([FireAuth, FireAuth.signInWithPopup], githubAuthProvider);
    yield put(loginSuccess(user));
  } catch (error) {
    yield put(loginFailed(error));
  }
}

const initialState = {
  user: null,
};
export default function auth(state=initialState, action={}) {
  const { user } = action.payload || {};
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user
      };
    case LOGIN_FAILED:
      return {};
    default:
      return initialState;
  }
}
