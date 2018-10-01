import React, { Component } from 'react';

export default class Vote extends Component {
  state = {
    dataKey: null
  };

  componentDidMount() {
    const { drizzle } = this.props;
    const contract = drizzle.contracts.Election;

    const dataKey = contract.methods['candidatesCount'].cacheCall();
    this.setState({ dataKey });
  }

  render() {
    console.log(this.props);
    console.log(this.state);
    // const { Election } = this.props.drizzleState.contracts;
    // console.log(this.props.drizzleState.contracts);
    // const candidatesCount = Election.candidatesCount[this.state.dataKey];
    return (
      <div>
        <div>Account: {this.props.drizzleState.accounts[0]}</div>
        {/* <div>Count: {candidatesCount}</div> */}
      </div>
    );
  }
}
