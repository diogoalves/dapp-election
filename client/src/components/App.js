import React from 'react';
import { DrizzleContext } from 'drizzle-react';
import Vote from './Vote';

export default () => (
  <DrizzleContext.Consumer>
    {drizzleContext => {
      const { drizzle, drizzleState, initialized } = drizzleContext;

      if (!initialized) {
        return 'Loading...';
      }

      return <Vote drizzle={drizzle} drizzleState={drizzleState} />;
    }}
  </DrizzleContext.Consumer>
);
