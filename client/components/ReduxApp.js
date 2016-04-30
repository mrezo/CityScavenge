import React from 'react';
import {connect} from 'react-redux';
import stateVariables from '../props';

// TODO remove below file examples
// import {EncounterList, EncounterListContainer} from './EncounterList';
// import {UserProfileContainer} from './UserProfile.js';

// export const App = React.createClass({
class App extends React.Component {

  // Initial rendering of the app
  // ===================================
  render() {
    return (
      <div>
        <div>
        <GameHeader user={stateVariables.currentUser} />
        </div>
        <div className = 'game-window'>
          <GameWindow map={stateVariables.currentMap} />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
