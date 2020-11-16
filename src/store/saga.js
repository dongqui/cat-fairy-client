import {all, take, call, put} from 'redux-saga/effects';
import { LOGIN_WITH_GITHUB, signInWithRedirect } from './auth';
import {
  GET_CHALLENGE_STATUS,
  getChallengeStatusRequest,
  getChallengeStatusSuccess,
  getChallengeStatusFailed,
  SELECT_CAT,
  selectCatRequest,
  selectCatSuccess,
  selectCatFailed,
} from './mian';
import { getChallengeStatusApi,  selectCatApi } from '../api';

function *watchGithubLogin() {
  while (true) {
    yield take(LOGIN_WITH_GITHUB);
    yield call(signInWithRedirect);
  }
}

function *watchGetChallengeStatus() {
  while (true) {
    const { payload } = yield take(GET_CHALLENGE_STATUS);
    try {
      yield put(getChallengeStatusRequest());
      const challengeHistory = yield call(getChallengeStatusApi, payload.uid);
      yield put(getChallengeStatusSuccess(challengeHistory));
    } catch (error) {
      yield put(getChallengeStatusFailed(error));
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
    watchGetChallengeStatus(),
    watchSelectCat(),
  ]);
}
