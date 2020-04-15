import { all } from 'redux-saga/effects';
import { watchRequestToken } from './auth';

export default function* rootSaga() {
  yield all([
    watchRequestToken(),
  ])
}