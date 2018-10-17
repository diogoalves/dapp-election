import React, { Component } from 'react';
import Candidates from './Candidates';
import { DrizzleContext } from "drizzle-react";

class App extends Component {
  render() {
    return (
      <DrizzleContext.Consumer>
        {drizzleContext => {
          const { drizzle, drizzleState, initialized } = drizzleContext;

          if (!initialized) {
            return "Loading...";
          }

          return (
            <div>
              <Candidates
                drizzle={drizzle}
                drizzleState={drizzleState}
              />
              <div>
                Account: {drizzleState.accounts[0]}
              </div>
            </div>
          );
        }}
      </DrizzleContext.Consumer>
    );
  }

}

export default App;
