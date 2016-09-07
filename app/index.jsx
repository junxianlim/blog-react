import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import promiseMiddleware from 'redux-promise';

import styles from './styles/application.styl';
import reducers from './reducers';
import routes from './routes.js';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)} >
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.getElementById('app')
)
