import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Drizzle, generateStore } from "drizzle";
import MyStringStore from "./contracts/MyStringStore.json";

const options = { contracts: [MyStringStore] };
const drizzleStore = generateStore(options);
const drizzle = new Drizzle(options, drizzleStore);

ReactDOM.render(<App drizzle={drizzle} />, document.getElementById("root"));
registerServiceWorker();
