import React, { Component } from 'react';
import { connect } from 'react-redux';
import { drizzleConnect } from 'drizzle-react';
import { ContractData } from 'drizzle-react-components';

class Vote extends Component {
  render() {
    console.log(this);
    if (this.props.election.initialized) {
      // const abi = this.props.election.abi();
      //console.log(this.props.contracts)
    }
    return (
      <div>
        <div>{`Initialized: ${this.props.initialized}`}</div>
        <div>{`Account: ${this.props.account}`}</div>
        {/* <ContractData contract="Election" method="candidatesCount"  />
        <ContractData contract="Election" method="candidates" methodArgs={[1]} />
        <ContractData contract="Election" method="candidates" methodArgs={[2]} /> */}
        {/* <Teste contract="Election" method="candidates" methodArgs={[2]} />  */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    initialized: state.drizzleStatus.initialized,
    account: state.accounts[0],
    election: state.contracts.Election,
    state,
    contracts: state.contracts
  };
};

//export default connect(mapStateToProps)(Vote);
export default drizzleConnect(Vote, mapStateToProps);
