import React, { Component } from 'react';
import { Route, Switch } from 'react-router';

const Vote = () => <div>Vote</div>;
const Dashboard = () => <div>Dashboard</div>;

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Vote} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    );
  }
}

export default App;
