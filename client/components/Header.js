import React from 'react';
import { connect } from 'react-redux';

// You have to write a function that returns an object which
// tells React-Redux how to map everything in the store to any
// props refered to in the above component
// I have abstracted this out into a different file because we
//   will use the same props for many pages
import { mapStateToProps } from '../props';

// The first of two things that a React-Redux component exports is
// a standard React component which uses a bunch of props.
export class Header extends React.Component {
  render() {
    return (
      <div>
          <button type="button">Start Game</button>
          <span className="user-name">Current User: { this.props.username } </span>
      </div>
    );
  }
}

// Lastly, we export an object which tells what function to use to map
// the state to the props
export const HeaderContainer = connect(mapStateToProps)(Header);
