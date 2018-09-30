import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

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

import { DrizzleProvider } from 'drizzle-react';
import Election from './contracts/Election.json';
import LoadingContainer from './components/LoadingContainer';
import registerServiceWorker from './registerServiceWorker';
import { DrizzleContext } from 'drizzle-react';

const options = { contracts: [Election] };

const history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const middleware = [routerMiddleware(history), sagaMiddleware];

const initialState = {
  contracts: generateContractsInitialState(options)
};

const store = createStore(
  connectRouter(history)(reducer),
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

const drizzleStore = generateStore(options);
const drizzle = new Drizzle(options, store);

sagaMiddleware.run(sagas);

ReactDOM.render(
  <DrizzleContext.Provider drizzle={drizzle}>
    <LoadingContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    </LoadingContainer>
  </DrizzleContext.Provider>,
  document.getElementById('root')
);

registerServiceWorker();
