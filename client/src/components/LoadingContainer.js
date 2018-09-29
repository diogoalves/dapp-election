import React from 'react';
import { DrizzleContext } from 'drizzle-react';

export default ({ children }) => (
  <DrizzleContext.Consumer>
    {drizzleContext => {
      const { drizzle, drizzleState, initialized } = drizzleContext;

      if (!initialized) {
        return 'Loading...';
      }

      return children;
    }}
  </DrizzleContext.Consumer>
);
