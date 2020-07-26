import { put, call } from "redux-saga/effects";

export const action = (type, payload) => {
  return {
    type,
    payload
  }
}

export function* fetchEntity(entity, apiFn, id, url) {
  yield put( entity.request(id) )
  try {
    const response = yield call(apiFn, url || id)
    yield put(entity.success(id, response.data));
  } catch (error) {
    yield put(entity.failure(id, error));
  }
}
