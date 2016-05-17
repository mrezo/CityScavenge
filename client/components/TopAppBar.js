import React, { PropTypes } from 'react';
import AppBar from 'material-ui/lib/app-bar';
import FlatButton from 'material-ui/lib/flat-button';

const TopAppBar = ({ handleToggle, name }) => {
  return (
    <div>
    <AppBar
      title="City Scavenge"
      onLeftIconButtonTouchTap={handleToggle}
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
