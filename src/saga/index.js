import { all, fork } from 'redux-saga/effects';
import watchRequestSignUpWithEmail from './auth';

export default function* rootSaga() {
  yield all([
    fork(watchRequestSignUpWithEmail)
  ]);
}
