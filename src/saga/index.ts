import { all, fork } from 'redux-saga/effects';
import { watchRequestToken, watchLogin } from './auth';
import { watchNavigatePush, watchNavigateReplace  } from './navigate';

export default function* rootSaga() {
  yield all([
    fork(watchLogin),
    fork(watchRequestToken),
    fork(watchNavigatePush),
    fork(watchNavigateReplace)
  ])
}
