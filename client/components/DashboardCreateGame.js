import React, { PropTypes } from 'react';
import TextField from 'material-ui/lib/TextField';
import RaisedButton from 'material-ui/lib/raised-button';
import styles from 'material-ui/lib/styles';

const DashboardCreateGame = ({ gameName, gameRadius }) => (
  <div>
    <TextField
      {...gameName}
      hintText="Make sure it's EPIC!"
      id="text-field-controlled"
      floatingLabelText="Scanvenge Name"
      fullWidth={true}
    /><br />
    <TextField
      {...gameRadius}
      hintText="Make sure it's in meters"
      id="text-field-controlled"
      floatingLabelText="Distance"
      fullWidth={true}
    /><br />
    <div className="create-game-button">
      <RaisedButton
        label="Create Game"
        backgroundColor={styles.Colors.pink400}
        primary={true}
        linkButton={true}
        href="/#/game"
      />
    </div>
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
