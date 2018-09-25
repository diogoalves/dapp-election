import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Vote from './Vote';

const Dashboard = () => <div>Dashboard</div>;

class App extends Component {
  render() {
    return (
      <div>
        {/* <Switch>
          <Route exact path="/" component={Vote} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch> */}
        <Vote />
      </div>
    );
  }
}

export default App;
