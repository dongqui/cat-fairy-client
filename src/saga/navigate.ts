import { history } from '../modules/index';
import { NAVIGATE } from '../modules/navigate';
import { take } from 'redux-saga/effects';

export function* watchNavigate() {
  while(true) {
    const { pathname } = yield take(NAVIGATE);
    yield history.push(pathname);
  }
}
