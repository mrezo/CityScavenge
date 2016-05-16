import React, { PropTypes } from 'react';
import AppBar from 'material-ui/lib/app-bar';
import FlatButton from 'material-ui/lib/flat-button';

const TopAppBar = ({ handleToggle, name }) => {
  return (
    <div>
    <AppBar title="City Hunt" iconClassNameRight="muidocs-icon-navigation-expand-more" onClick={e => {
      e.preventDefault();
      handleToggle();
    }}
      iconElementRight={<FlatButton label={name} />}
    />
  </div>
  );
};

TopAppBar.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default TopAppBar;
