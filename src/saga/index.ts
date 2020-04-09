import { all } from 'redux-saga/effects';
import { watchRequestToken } from './token';

export default function* rootSaga() {
  yield all([
    watchRequestToken(),
  ])
}