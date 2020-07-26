import { all, fork, take, call } from 'redux-saga/effects';
import { SIGN_UP_WITH_EMAIL, createUserWithEmail } from './auth';

function* watchRequestSignUpWithEmail() {
  while(true) {
    const { payload } = yield take(SIGN_UP_WITH_EMAIL);
    yield call(createUserWithEmail, payload.email, payload.password);
  }
}

export default function* rootSaga() {
  yield all([
    fork(watchRequestSignUpWithEmail)
  ]);
}
