import React from 'react';
import { DrizzleContext } from 'drizzle-react';

export default ({ children }) => (
  <DrizzleContext.Consumer>
    {drizzleContext => {
      const { initialized } = drizzleContext;

      if (!initialized) {
        return <div>Loading...</div>;
      }

      return children;
    }}
  </DrizzleContext.Consumer>
);
