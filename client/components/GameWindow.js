import React from 'react';
import { connect } from 'react-redux';
import { mapStateToPropsWindow, mapDispatchToPropsWindow } from '../props';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import IconButton from 'material-ui/lib/icon-button';
import FontIcon from 'material-ui/lib/font-icon';
import NavigationExpandMoreIcon from 'material-ui/lib/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/lib/menus/menu-item';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import RaisedButton from 'material-ui/lib/raised-button';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';
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
