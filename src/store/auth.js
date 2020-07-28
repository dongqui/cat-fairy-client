import { call, put } from "redux-saga/effects";
import { FireAuth } from "../firebase";
import { action } from "./helper";

export const SIGN_UP_WITH_EMAIL = 'SIGN_UP_WITH_EMAIL';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILED = 'SIGN_UP_FAILED';

export function signUpWithEmail(email, password) {
  return action(SIGN_UP_WITH_EMAIL, { email, password })
}

function signUpSuccess(user) {
  return action(SIGN_UP_SUCCESS, { user });
}

function signUpFailed(error) {
  return action(SIGN_UP_FAILED, { error });
}

export function* createUserWithEmail(email, password, userName) {
  try {
    const userCredential = yield call([FireAuth, FireAuth.createUserWithEmailAndPassword], email, password);
    yield call([userCredential.user, userCredential.user.updateProfile], { displayName: userName });
    yield put(signUpSuccess(userCredential, userCredential.user));
  } catch (error) {
    yield put(signUpFailed(error));
  }
}

const initialState = {
  user: null,
};
export default function auth(state=initialState, action={}) {
  const { user } = action.payload || {};
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        user
      };
    case SIGN_UP_FAILED:
      return {};
    default:
      return initialState;
  }
}
