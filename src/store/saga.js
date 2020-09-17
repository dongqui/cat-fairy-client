import { all, fork, take, call } from 'redux-saga/effects';
import { LOGIN_WITH_GITHUB, signInWithRedirect } from './auth';
import { GET_COMMIT_HISTORY, _getCommitHistory } from './mian';

function *watchGithubLogin() {
  while (true) {
    yield take(LOGIN_WITH_GITHUB);
    yield call(signInWithRedirect);
  }
}

function *watchGetCommitHistory() {
  while (true) {
    yield take(GET_COMMIT_HISTORY);
    yield call(_getCommitHistory)
  }
}

export default function* rootSaga() {
  yield all([
    fork(watchGithubLogin),
  ]);
}
