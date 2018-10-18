import React, { PureComponent } from 'react';
import { DrizzleContext } from "drizzle-react";

class Candidate extends PureComponent {

  render() {
    const { id } = this.props;
    return (
      <DrizzleContext.Consumer>
        {drizzleContext => {
          const { drizzleState } = drizzleContext;
          const { Election } = drizzleState.contracts;
          const candidate = Election.candidates[id];
          if (candidate && candidate.value) {
            const name = candidate.value.name;
            const voteCount = candidate.value.voteCount;
            return (
              <p>{`${name}: ${voteCount}`}</p>
            );
          } else {
            return null;
          }

        }}
      </DrizzleContext.Consumer>
    )
  }
}
export default Candidate;