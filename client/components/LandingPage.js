import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import styles from 'material-ui/lib/styles';
import card from 'material-ui/lib/card';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';

const LandingPage = () => (
  <div className="landing-container">
    <div className="transparent">
      <span className="title">City Scavenge</span>
      <div className="login-button">
        <RaisedButton label="Login with Google" backgroundColor={styles.Colors.red500} primary={true} linkButton={true} href="/api/v1/auth/google" />
      </div>
    </div>
  </div>
);

export default LandingPage;
