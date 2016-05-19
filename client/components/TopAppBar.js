import React, { PropTypes } from 'react';
import AppBar from 'material-ui/lib/app-bar';
import FlatButton from 'material-ui/lib/flat-button';
import Avatar from 'material-ui/lib/avatar';

const TopAppBar = ({ handleToggle, name, avatar }) => {
  return (
    <div>
      <AppBar
        title="City Scavenge"
        onLeftIconButtonTouchTap={handleToggle}
        iconElementRight={
        <div>
          <FlatButton label={name} />
          <Avatar className="avatar" src={avatar} />
        </div>}
      />
    </div>
  );
};

TopAppBar.propTypes = {
  avatar: PropTypes.string,
  handleToggle: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default TopAppBar;
