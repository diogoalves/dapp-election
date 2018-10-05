import React, { Component } from 'react';
import Candidates from './Candidates';

class App extends Component {
  state = { loading: true, drizzleState: null };

  componentDidMount() {
    const { drizzle } = this.props;
    this.unsubscribe = drizzle.store.subscribe(() => {
      const drizzleState = drizzle.store.getState();
      if (drizzleState.drizzleStatus.initialized) {
        this.setState({ loading: false, drizzleState });
      }
    });
  }
  
  compomentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    if (this.state.loading) return "Loading Drizzle...";
    return (
      <div>
        <Candidates
          drizzle={this.props.drizzle}
          drizzleState={this.state.drizzleState}
        />
        <div>
          Account: {this.state.drizzleState.accounts[0]}
        </div>
      </div>
    );  }
  
}

export default App;
