import React, { PropTypes } from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import { Link } from 'react-router';

const DashboardLeftNav = ({ handleToggle, visible }) => (
  <div>
    <LeftNav docked={false} width={200} open={visible} onRequestChange={open => handleToggle()}>
      <MenuItem onClick={e => {
        e.preventDefault();
        handleToggle();
      }}>
        <Link to="/">
          Logout
        </Link>
      </MenuItem>
    </LeftNav>
  </div>
);

DashboardLeftNav.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default DashboardLeftNav;
