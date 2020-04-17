import { all } from 'redux-saga/effects';
import { watchRequestToken } from './auth';
import { watchNavigatePush, watchNavigateReplace  } from './navigate';

export default function* rootSaga() {
  yield all([
    watchRequestToken(),
    watchNavigatePush(),
    watchNavigateReplace()
  ])
}
