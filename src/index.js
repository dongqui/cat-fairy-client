import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/index';
import * as serviceWorker from './serviceWorker';
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
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
