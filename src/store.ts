import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { rootReducer, history } from './modules/index';
import rootSaga from './saga/index';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export { store, history }