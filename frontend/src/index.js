import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Drizzle, generateStore } from "drizzle";
import Election from "./contracts/Election.json";

const options = { contracts: [Election] };
const drizzleStore = generateStore(options);
const drizzle = new Drizzle(options, drizzleStore);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
