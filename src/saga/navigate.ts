import { history } from '../modules/index';
import { NAVIGATE_PUSH, NAVIGATE_REPLACE } from '../modules/navigate';
import { take } from 'redux-saga/effects';

export function* watchNavigatePush() {
  while(true) {
    const { pathname } = yield take(NAVIGATE_PUSH);
    yield history.push(pathname);
  }
}

export function* watchNavigateReplace() {
  while(true) {
    const { pathname } = yield take(NAVIGATE_REPLACE);
    yield history.replace(pathname);
  }
}