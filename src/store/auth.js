import { call, put } from "redux-saga/effects";
import { FireAuth, githubAuthProvider } from "../firebase";
import { action } from "./helper";

export const LOGIN_WITH_GITHUB = 'LOGIN_WITH_GITHUB';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED  = 'LOGIN_FAILED';


export function loginWithGithub() {
  return action(LOGIN_WITH_GITHUB)
}

export function loginSuccess(user) {
  console.log(user);
  return action(LOGIN_SUCCESS, { user });
}

function loginFailed(error) {
  return action(LOGIN_FAILED, { error });
}

export function* signInWithRedirect() {
  try {
    yield call([FireAuth, FireAuth.signInWithRedirect], githubAuthProvider);
  } catch (error) {
    yield put(loginFailed(error));
  }
}

const initialState = {
  user: FireAuth.currentUser,
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
