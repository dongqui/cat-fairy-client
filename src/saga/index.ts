import { all } from 'redux-saga/effects';
import { watchRequestToken } from './auth';
import { watchNavigate } from './navigate';

export default function* rootSaga() {
  yield all([
    watchRequestToken(),
    watchNavigate(),
  ])
}
