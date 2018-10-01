import React from 'react';
import ReactDOM from 'react-dom';
import { Drizzle, generateStore } from 'drizzle';
import { DrizzleContext } from 'drizzle-react';
import Election from './contracts/Election.json';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';

const options = { contracts: [Election] };
const drizzleStore = generateStore(options);
const drizzle = new Drizzle(options, drizzleStore);

ReactDOM.render(
  <DrizzleContext.Provider drizzle={drizzle}>
    <div>asd</div>
  </DrizzleContext.Provider>,
  document.getElementById('root')
);

registerServiceWorker();
