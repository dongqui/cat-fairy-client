import {all, fork, take, call, put} from 'redux-saga/effects';
import { LOGIN_WITH_GITHUB, signInWithRedirect } from './auth';
import {
  GET_COMMIT_HISTORY,
  getCommitHistoryRequest,
  getCommitHistorySuccess,
  getCommitHistoryFailed,
  SELECT_CAT,
  selectCatRequest,
  selectCatSuccess,
  selectCatFailed,
} from './mian';
import { getCommitHistoryApi,  selectCatApi } from '../api';

function *watchGithubLogin() {
  while (true) {
    yield take(LOGIN_WITH_GITHUB);
    yield call(signInWithRedirect);
  }
}

function *watchGetCommitHistory() {
  while (true) {
    const { payload } = yield take(GET_COMMIT_HISTORY);
    try {
      yield put(getCommitHistoryRequest());
      const commitHistory = yield call(getCommitHistoryApi, payload.uid);
      yield put(getCommitHistorySuccess(commitHistory));
    } catch (error) {
      yield put(getCommitHistoryFailed(error));
    }
  }
}

function *watchSelectCat() {
  while (true) {
    const { payload } = yield take(SELECT_CAT);
    try {
      yield put(selectCatRequest(payload.catType, payload.uid));
      yield call(selectCatApi, payload.catType, payload.uid);
      yield put(selectCatSuccess(payload.catType));
    } catch (error) {
      yield put(selectCatFailed(error));
    }
  }
}

export default function* rootSaga() {
  yield all([
    watchGithubLogin(),
    watchGetCommitHistory(),
    watchSelectCat(),
  ]);
}
