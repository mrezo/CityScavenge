import React from 'react';
import { connect } from 'react-redux';
import { mapStateToPropsWindow } from '../props';
import AppBar from 'material-ui/lib/app-bar';
import Avatar from 'material-ui/lib/avatar';

export class Dashboard extends React.Component {
  render() {
    return (
      <AppBar title="City Hunt" iconClassNameRight="muidocs-icon-navigation-expand-more" />
      <Avatar src="images/uxceo-128.jpg" />
    );
  }
}

// module.exports = LandingPage;
export const DashboardContainer = connect(mapStateToPropsWindow)(Dashboard);

