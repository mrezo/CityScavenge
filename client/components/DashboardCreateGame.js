import React, { PropTypes } from 'react';
import TextField from 'material-ui/lib/TextField';
import RaisedButton from 'material-ui/lib/raised-button';
import styles from 'material-ui/lib/styles';

const DashboardCreateGame = ({ gameName, submitGame }) => (
  <div>
    <TextField
      hintText="Time to Type!"
      floatingLabelText="Game Name"
      value={ gameName }
      multiLine={true}
      rows={2}
    /><br />
    <TextField
      hintText="Time to Type!"
      floatingLabelText="Game Radius"
      value={ gameRadius }
    /><br />
    <RaisedButton
      label="Create Game"
      backgroundColor={styles.Colors.pink400}
      primary={true}
      linkButton={true}
      onMouseDown={ submitGame }
      href="/#/game"
    />
  </div>
);

DashboardCreateGame.propTypes = {
  gameName: PropTypes.string.isRequired,
  submitGame: PropTypes.func.isRequired,
};

export default DashboardCreateGame;
