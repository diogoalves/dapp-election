import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { DrizzleContext } from "drizzle-react";
import { drizzleConnect } from 'drizzle-react';

/*
class Vote extends Component {
  render() {
    console.log(this.props)

    const { initialized } = this.props;
    return (
      <DrizzleContext.Consumer>
        {drizzleContext => {
          const { drizzle, drizzleState, initialized } = drizzleContext;

          if (!initialized) {
            return "Loading...";
          }

          return (
            <div>{`Vote: ${initialized}`}</div>
          );
        }}
      </DrizzleContext.Consumer>
    );
  }
}
*/
class Vote extends Component {
  render() {
    console.log(this.props);

    const { initialized } = this.props;
    if (!initialized) {
      return 'Loading...';
    }
    return <div>{`Vote: ${initialized}`}</div>;
  }
}

const mapStateToProps = state => {
  return {
    initialized: state.drizzleStatus.initialized,
    election: state.contracts.Election,
    state
  };
};

//export default connect(mapStateToProps)(Vote);

// export default Vote;

export default drizzleConnect(Vote, mapStateToProps);
