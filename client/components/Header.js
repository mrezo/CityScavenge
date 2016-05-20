import React from 'react';
import { connect } from 'react-redux';

import { mapStateToProps } from '../props';

export class Header extends React.Component {
  render() {
    return (
      <div>
          <button type="button">Start Game
          <a href='/auth/google'></a></button>
          <span className="user-name">Current User: { this.props.username } </span>
      </div>
    );
  }
}

export const HeaderContainer = connect(mapStateToProps)(Header);
