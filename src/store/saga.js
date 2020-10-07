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
    const { payload } = yield take(GET_COMMIT_HISTORY);
    yield call(_getCommitHistory, payload.uid)
  }
}

export default function* rootSaga() {
  yield all([
    fork(watchGithubLogin),
    fork(watchGetCommitHistory),
  ]);
}
