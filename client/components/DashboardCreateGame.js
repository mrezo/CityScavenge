import React from 'react';
import TextField from 'material-ui/lib/TextField';
import RaisedButton from 'material-ui/lib/raised-button';
import styles from 'material-ui/lib/styles';

const DashboardCreateGame = () => (
  <div>
    <TextField
      hintText="time to type!"
      floatingLabelText="Game Name"
      multiLine={true}
      rows={2}
    /><br />
    <TextField
      hintText="time to type!"
      floatingLabelText="Game ID"
    /><br />
    <TextField
      hintText="Message Field"
      floatingLabelText="Game Radius"
    /><br />
    <RaisedButton label="Create Game" backgroundColor={styles.Colors.pink400} primary={true} linkButton={true} href="/#/game" />
  </div>
);

export default DashboardCreateGame;
