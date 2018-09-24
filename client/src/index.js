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
import { generateContractsInitialState } from 'drizzle';
import LoadingContainer, { DrizzleProvider } from 'drizzle-react';
import drizzleOptions from './drizzleOptions';
import registerServiceWorker from './registerServiceWorker';

const history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const middleware = [routerMiddleware(history), sagaMiddleware];

const initialState = {
  contracts: generateContractsInitialState(drizzleOptions)
};

const store = createStore(
  connectRouter(history)(reducer),
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

sagaMiddleware.run(sagas);

ReactDOM.render(
  <Provider store={store}>
    <DrizzleProvider options={drizzleOptions} store={store}>
      <LoadingContainer
        loadingComp={() => <h1>Loading...</h1>}
        errorComp={() => <h1>Error!</h1>}
      >
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </LoadingContainer>
    </DrizzleProvider>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
