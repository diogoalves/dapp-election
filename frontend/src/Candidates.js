import React, { Component } from "react";
import List from './List';
import Vote from './Vote';

class Candidates extends Component {
  state = { 
    candidatesCountdataKey: null 
  };

  componentDidMount() {
    const { drizzle } = this.props;
    const contract = drizzle.contracts.Election;
    const candidatesCountdataKey = contract.methods["candidatesCount"].cacheCall();
    this.setState({ candidatesCountdataKey });
  }

  render() {
    const { Election } = this.props.drizzleState.contracts;
    const candidatesCount = Election.candidatesCount[this.state.candidatesCountdataKey];
    return (
      <div>
        { candidatesCount && candidatesCount.value && (
          <div>
            <List
              drizzle={this.props.drizzle}
              drizzleState={this.props.drizzleState}
              candidatesCount={candidatesCount.value}
            />
            <Vote
              drizzle={this.props.drizzle}
              drizzleState={this.props.drizzleState}
              candidatesCount={candidatesCount.value}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Candidates;
