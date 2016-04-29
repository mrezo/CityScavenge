import React from 'react';
import {connect} from 'react-redux';
// TODO remove below file examples
import {EncounterList, EncounterListContainer} from './EncounterList';
import {UserProfileContainer} from './UserProfile.js';

// export const App = React.createClass({
class App extends React.Component {

  // Initial rendering of the app
  // ===================================
  render() {
    return (
      <div>
        <div>
        <GameHeader user={this.state.currentUser} />
        </div>
        <div className = 'game-window'>
          <GameWindow map={this.state.currentMap} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentMap: state.getIn(['currentMap']),
    username: state.getIn(['currentUser', 'username']),
    userImage: state.getIn(['currentUser', 'image']),
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
