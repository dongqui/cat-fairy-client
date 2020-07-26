import { call, put } from "redux-saga/effects";
import { FireAuth } from "../firebase";
import { action } from "./helper";

export const SIGN_UP_WITH_EMAIL = 'SIGN_UP_WITH_EMAIL';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILED = 'SIGN_UP_FAILED';

export function signUpWithEmail(email, password) {
  return action(SIGN_UP_WITH_EMAIL, { email, password })
}

function signUpSuccess(userCredential) {
  return action(action(SIGN_UP_SUCCESS, { userCredential }));
}

function signUpFailed(error) {
  return action(action(SIGN_UP_FAILED, { error }));
}

export function* createUserWithEmail(email, password) {
  try {
    const userCredential = yield call([FireAuth, FireAuth.createUserWithEmailAndPassword], email, password);
    yield put(signUpSuccess(userCredential));
  } catch (error) {
    console.log(error);
    yield put(signUpFailed(error));
  }
}

const initialState = {
  user: null,
};
export default function auth(state=initialState, action) {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      return {
        ...state,
      };
    case SIGN_UP_FAILED:
      return {};
    default:
      return initialState;
  }
}
