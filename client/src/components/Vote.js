import React, { Component } from 'react';
import { drizzleConnect } from 'drizzle-react';

class Vote extends Component {
  render() {
    const { initialized } = this.props.drizzleStatus;
    return (
      <div>
        {`Vote: ${initialized}`}
        <div>{`Vote: ${initialized}`}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    drizzleStatus: state.drizzleStatus,
    election: state.contracts.Election
  };
};

export default drizzleConnect(Vote, mapStateToProps);
