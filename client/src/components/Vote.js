import React, { Component } from 'react';
import { connect } from 'react-redux';

class Vote extends Component {
  render() {
    return <div>{`Vote: ${this.props.initialized}`}</div>;
  }
}

const mapStateToProps = state => {
  return {
    initialized: state.drizzleStatus.initialized,
    election: state.contracts.Election,
    state
  };
};

export default connect(mapStateToProps)(Vote);
