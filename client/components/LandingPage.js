import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import styles from 'material-ui/lib/styles';
import card from 'material-ui/lib/card';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';

const LandingPage = () => (
  <div className="landing-container">
    <card backgroundColor={styles.Colors.cyan300}>
      <CardMedia overlay={<CardTitle title="City Scavenge" subtitle="Explore your city" />}><img src={'https://cdn.getyourguide.com/niwziy2l9cvz/1XBkFZIKqYw0248uGCuaWG/cc3d1c8fec71b6706ac961b449d2d823/san-francisco-san-francisco-bay-1112x630.jpg'} /></CardMedia>
      <div className="button-group">
        <RaisedButton label="Login with Google" backgroundColor={styles.Colors.red500} primary={true} linkButton={true} href="api/v1/auth/google" />
      </div>
    </card>
  </div>
);

export default LandingPage;
