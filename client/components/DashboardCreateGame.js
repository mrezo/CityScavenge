import React, { PropTypes } from 'react';
import TextField from 'material-ui/lib/TextField';
import RaisedButton from 'material-ui/lib/raised-button';
import styles from 'material-ui/lib/styles';

var gameRadius = 0;

const DashboardCreateGame = ({ gameName, submitGame, handleChange }) => (
  <div>
    <TextField
      hintText="Time to Type!"
      floatingLabelText="Game Name"
      value={ gameName }
      onChange={ handleChange }
      id="text-field-controlled"
      onChange={ handleChange }
      multiLine={true}
      rows={2}
    /><br />
    <TextField
      hintText="Time to Type!"
      // id="text-field-controlled"
      floatingLabelText="Game Radius"
      value={ gameRadius }
      onChange={ handleChange }
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
  handleChange: PropTypes.func.isRequired,
};

export default DashboardCreateGame;
