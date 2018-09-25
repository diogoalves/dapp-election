import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import {
  ConnectedRouter,
  connectRouter,
  routerMiddleware
} from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import App from './components/App';
import reducer from './reducers';
import sagas from './sagas';
import { Drizzle, generateStore, generateContractsInitialState } from 'drizzle';
import { DrizzleContext, DrizzleProvider } from 'drizzle-react';
import Election from './contracts/Election.json';

import registerServiceWorker from './registerServiceWorker';

const options = { contracts: [Election] };
const drizzleStore = generateStore(options);
const drizzle = new Drizzle(options, drizzleStore);

const history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const middleware = [routerMiddleware(history), sagaMiddleware];

const initialState = {
  sss: 2000,
  contracts: generateContractsInitialState(options)
};

const store = createStore(
  connectRouter(history)(reducer),
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

sagaMiddleware.run(sagas);

ReactDOM.render(
  // <DrizzleContext.Provider drizzle={drizzle}>
  <DrizzleProvider options={options}>
    <Provider store={store}>
      {/* <ConnectedRouter history={history}> */}
      <App />
      {/* </ConnectedRouter> */}
    </Provider>
  </DrizzleProvider>,
  //</DrizzleContext.Provider>
  document.getElementById('root')
);

registerServiceWorker();
