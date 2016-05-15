import React from 'react';
import GameWindow from './GameWindow';
import LandingPage from './LandingPage';
import DashboardContainer from '../containers/DashboardContainer';
import { Router, Route, hashHistory } from 'react-router';

const App = () => (
  <div>
    <Router history={hashHistory}>
      <Route component={LandingPage} path="/" />
      <Route component={DashboardContainer} path="/dashboard" />
      <Route component={GameWindow} path="/game" />
    </Router>
  </div>
);

export default App;
