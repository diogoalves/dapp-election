import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import { createBrowserHistory } from 'history';
import {
  //ConnectedRouter,
  connectRouter,
  routerMiddleware
} from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import App from './components/App';
import reducer from './reducers';
import sagas from './sagas';
import { generateContractsInitialState } from 'drizzle';
import { DrizzleProvider } from 'drizzle-react';
import Election from './contracts/Election.json';
import { LoadingContainer } from 'drizzle-react-components';
import registerServiceWorker from './registerServiceWorker';

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

sagaMiddleware.run(sagas);

ReactDOM.render(
  <DrizzleProvider options={options} store={store}>
    {/* <ConnectedRouter history={history}> */}
    <LoadingContainer
      loadingComp={() => <h1>loading</h1>}
      errorComp={() => <h1>error</h1>}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </LoadingContainer>

    {/* </ConnectedRouter> */}
  </DrizzleProvider>,
  document.getElementById('root')
);

registerServiceWorker();
