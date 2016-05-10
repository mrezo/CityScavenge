import React from 'react';
import { connect } from 'react-redux';
import { mapStateToPropsWindow, mapDispatchToPropsWindow } from '../props';
import RaisedButton from 'material-ui/lib/raised-button';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import VisibleDashboardLeftNav from '../containers/VisibleDashboardLeftNav';
import VisibleTopAppBar from '../containers/VisibleTopAppBar';
import GoogleMapContainer from '../containers/GoogleMap';

const GameWindow = () => (
  <div className="game-wrapper">
  <VisibleDashboardLeftNav />
  <VisibleTopAppBar />
  <GoogleMapContainer />
    <Toolbar className="bottom-toolbar">
      <ToolbarGroup >
        <RaisedButton label="Check In" primary={true} />
        <RaisedButton label="End Game" />
      </ToolbarGroup>
    </Toolbar>
  </div>
);

export default GameWindow;
