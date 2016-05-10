import React, { PropTypes } from 'react';
import AppBar from 'material-ui/lib/app-bar';

const TopAppBar = ({ handleToggle }) => {
  return (
    <div>
    <AppBar title="City Hunt" iconClassNameRight="muidocs-icon-navigation-expand-more" onClick={e => {
        e.preventDefault();
        handleToggle();
      }} />
  </div>
  );
};

TopAppBar.propTypes = {
  handleToggle: PropTypes.func.isRequired,
};

export default TopAppBar;
