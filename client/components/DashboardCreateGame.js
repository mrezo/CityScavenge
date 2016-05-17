import React, { PropTypes } from 'react';
import TextField from 'material-ui/lib/TextField';
import RaisedButton from 'material-ui/lib/raised-button';
import styles from 'material-ui/lib/styles';

const DashboardCreateGame = ({ gameName, gameRadius, submitGame, handleChangeName, handleChangeRadius, updateUserPosition }) => (
  <div>
    <TextField
      {...gameName}
      hintText="Time to Type!"
      id="text-field-controlled"
      floatingLabelText="Game Name"
      multiLine={true}
      rows={2}
    /><br />
    <TextField
      {...gameRadius}
      hintText="Time to Type!"
      id="text-field-controlled"
      floatingLabelText="Distance"
    /><br />
    <RaisedButton
      label="Create Game"
      backgroundColor={styles.Colors.pink400}
      primary={true}
      linkButton={true}
      href="/#/game"
    />
  </div>
);

DashboardCreateGame.propTypes = {
  gameName: PropTypes.string,
  gameRadius: PropTypes.string,
  submitGame: PropTypes.func.isRequired,
  handleChangeRadius: PropTypes.func.isRequired,
  handleChangeName: PropTypes.func.isRequired,
};

export default DashboardCreateGame;
