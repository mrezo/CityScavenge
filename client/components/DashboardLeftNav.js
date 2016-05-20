import React, { PropTypes } from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import Divider from 'material-ui/lib/divider';
import MenuItem from 'material-ui/lib/menus/menu-item';
import { logout } from '../actions/index';

const DashboardLeftNav = ({ handleToggle, visible }) => (
  <div>
    <LeftNav docked={false} width={200} open={visible} onRequestChange={open => handleToggle()}>
      <MenuItem
        primaryText="Join Current Game"
        onTouchTap={ () => {
          handleToggle();
        }}
        href="/#/game"
      >
      </MenuItem>
      <MenuItem
        primaryText="Dashboard"
        onTouchTap={ () => {
          handleToggle();
        }}
        href="/#/dashboard"
      >
      </MenuItem>
      <Divider />
      <MenuItem
        primaryText="Logout"
        onTouchTap={ () => {
          logout();
        }}
        href="/"
      >
      </MenuItem>
    </LeftNav>
  </div>
);

DashboardLeftNav.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default DashboardLeftNav;
