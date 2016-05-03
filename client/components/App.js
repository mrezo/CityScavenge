import React from 'react';
import { connect } from 'react-redux';
import { HeaderContainer } from './GameHeader';
import { GameWindowContainer } from './GameWindow';

export class App extends React.Component {
  constructor(props) {
    super(props);

    // Current state of the app
    // ===================================
    this.state = {
      currentUser: props.game.username,
      userImage: props.game.image,
    };
  }

  // Initial rendering of the app
  // ===================================
  render() {
    return (
      <div>
        <div>
          <HeaderContainer user={this.state.currentUser} />
        </div>
        <div>
          <GameWindowContainer user={this.state.currentUser} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    game: {
      username: state.currentUser.username,
      image: state.currentUser.image,
    },
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}
// Temporary Dummy Data
// ===================================
window.dummyGameData = {
  username: 'The Gray Animal',
  image: 'http://www.hdiphonewallpaper.com/uploads/image/Animals/Gray%20animal%20wallpaper.jpg',
};

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
