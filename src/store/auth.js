import { call, put } from "redux-saga/effects";
import { createUserWithEmailAndPassword } from "../firebase";

export const SIGN_UP_WITH_EMAIL = 'SIGN_UP_WITH_EMAIL';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILED = 'SIGN_UP_FAILED';

export function signUpWithEmail(payload) {
  return { type: SIGN_UP_WITH_EMAIL, payload }
}

export function* createUserWithEmail(email, password) {
  try {
    const userCredential = yield call(createUserWithEmailAndPassword, email, password);
    yield put({ type: SIGN_UP_SUCCESS, userCredential });
  } catch (error) {
    yield put({ type: SIGN_UP_FAILED, error });
  }
}

const initialState = {};

export default function auth(state=initialState, action) {
  switch (action.type) {
    case SIGN_UP_SUCCESS:

      return { };
    case SIGN_UP_FAILED:
      return { };
    default:
      return initialState;
  }
}
