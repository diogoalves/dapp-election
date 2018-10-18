import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Drizzle, generateStore } from "drizzle";
import { DrizzleContext } from "drizzle-react";
import Election from "./contracts/Election.json";

const options = { contracts: [Election] };
const drizzleStore = generateStore(options);
const drizzle = new Drizzle(options, drizzleStore);

window.drizzleStore = drizzleStore;

ReactDOM.render(
<DrizzleContext.Provider drizzle={drizzle}>
  <App drizzle={drizzle}/>
</DrizzleContext.Provider>
, document.getElementById('root'));
registerServiceWorker();
