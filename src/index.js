import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/index';
import * as serviceWorker from './serviceWorker';
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./store/saga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devTools || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(...middlewares)
  ),
);
sagaMiddleware.run(rootSaga)

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <App/>
        </Router>
      </Provider>
    </React.StrictMode>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
