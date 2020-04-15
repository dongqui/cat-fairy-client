import { put, call } from 'redux-saga/effects';

interface IEntity<R, S, F> {
  request: R,
  success: S,
  failure: F
}

type ApiCall<P extends any[], R> = (...args: P) => Promise<R>;

export type ApiActionTypes<T extends { [K in keyof T]: (...args: any[]) => any }
> = ReturnType<T[keyof T]>;

export const createApiActions = 
  <R, S, F>(request: R, success: S, failure: F) => 
  <Param extends any[], Res>(api: ApiCall<Param, Res>) => (
    {
      request: (...args: Param) => ({type: request, payload: args}),
      success: (res: Res) => ({type: success, payload: res}),
      failure: (error: Error) => ({type: failure, payload: error})
    }
  )
;
export const fetchEntity = 
<
  R extends Function, 
  S extends Function, 
  F extends Function,
  Param extends any[],
  Res
> (entity: IEntity<R, S, F>, api: ApiCall<Param, Res>) => {
  return function *(...args: Param) {
    yield put(entity.request(...args));
    try {
      const data = (yield call(api, ...args)).data;
      yield put(entity.success(data));
    } catch (err) {
      yield put(entity.failure(err));
    }
  }
}
