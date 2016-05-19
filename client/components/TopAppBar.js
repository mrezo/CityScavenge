import React, { PropTypes } from 'react';
import AppBar from 'material-ui/lib/app-bar';
import Avatar from 'material-ui/lib/avatar';

const TopAppBar = ({ handleToggle, avatar }) => {
  return (
    <div>
      <AppBar
        title="City Scavenge"
        onLeftIconButtonTouchTap={handleToggle}
        iconElementRight={<Avatar className="avatar" src={avatar} />}
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
