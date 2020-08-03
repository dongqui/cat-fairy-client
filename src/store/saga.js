import { all, fork, take, call } from 'redux-saga/effects';
import { LOGIN_WITH_GITHUB, signInWithRedirect } from './auth';

function *watchGithubLogin() {
  while(true) {
    yield take(LOGIN_WITH_GITHUB);
    yield call(signInWithRedirect);
  }
}

export default function* rootSaga() {
  yield all([
    fork(watchGithubLogin),
  ]);
}
