import React, { Component } from "react";

class Vote extends Component {
  state = { stackId: null };

  vote = candidateId => () => {
    console.log(candidateId)
    const { drizzle, drizzleState } = this.props;
    const contract = drizzle.contracts.Election;
    const stackId = contract.methods["vote"].cacheSend(candidateId, {
      from: drizzleState.accounts[0]
    });
    this.setState({ stackId });
  };

  getTxStatus = () => {
    const { transactions, transactionStack } = this.props.drizzleState;
    const txHash = transactionStack[this.state.stackId];
    if (!txHash) return null;
    return `Transaction status: ${transactions[txHash].status}`;
  };

  render() {
    const { candidatesCount } = this.props;
    const buttons = [];
    for (var i = 1; i <= candidatesCount; i++) {
      buttons.push(<button key={i} type="button" onClick={this.vote(i)}>Vote candidate {i}</button>);
    }

    return (
      <div>
        {buttons}
        <div>{this.getTxStatus()}</div>
      </div>
    );
  }
}

export default Vote;
