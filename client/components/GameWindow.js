import React from 'react';
import { connect } from 'react-redux';
import { mapStateToPropsWindow, mapDispatchToPropsWindow } from '../props';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import VisibleDashboardLeftNav from '../containers/VisibleDashboardLeftNav';
import VisibleTopAppBar from '../containers/VisibleTopAppBar';
import GoogleMapContainer from '../containers/GoogleMap';
import PhotoSubmitContainer from '../containers/PhotoSubmit';

const GameWindow = () => (
  <div className="game-wrapper">
  <VisibleDashboardLeftNav />
  <VisibleTopAppBar />
  <GoogleMapContainer />
    <Toolbar className="bottom-toolbar">
      <ToolbarGroup >
        <PhotoSubmitContainer />
      </ToolbarGroup>
    </Toolbar>
  </div>
);

export default GameWindow;
