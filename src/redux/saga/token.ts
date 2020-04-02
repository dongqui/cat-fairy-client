import { put, takeEvery, all, takeLatest } from 'redux-saga/effects';
import { REQUEST_TOKEN } from '../actions/token';

export function *watchRequestToken() {
  takeLatest(REQUEST_TOKEN, )
  yield
}