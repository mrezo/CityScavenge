import React, { PropTypes } from 'react';
import TextField from 'material-ui/lib/TextField';
import RaisedButton from 'material-ui/lib/raised-button';
import styles from 'material-ui/lib/styles';

const DashboardCreateGame = ({ gameName, gameRadius, submitGame, handleChangeName, handleChangeRadius }) => (
  <div>
    <TextField
      hintText="Time to Type!"
      floatingLabelText="Game Name"
      value={ gameName }
      onChange={ handleChangeName }
      id="text-field-controlled"
      onChange={ handleChangeName }
      multiLine={true}
      rows={2}
    /><br />
    <TextField
      hintText="Time to Type!"
      // id="text-field-controlled"
      floatingLabelText="Game Radius"
      value={ gameRadius }
      onChange={ handleChangeRadius }
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
