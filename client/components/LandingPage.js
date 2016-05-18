import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import styles from 'material-ui/lib/styles';
import card from 'material-ui/lib/card';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';

const LandingPage = () => (
  <div className="landing-container">
    <br></br>
    <br></br>
    <span className="title">City Scavenge</span>
    <img className="icon" width="200px" height="200px" src="../assets/icon2.png"></img>
    <div className="button-container">
      <RaisedButton label="Login with Google" backgroundColor={styles.Colors.pink500} primary={true} linkButton={true} href="/api/v1/auth/google" />
    </div>
  </div>
);

export default LandingPage;