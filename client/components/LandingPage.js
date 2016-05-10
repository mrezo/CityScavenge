import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import { connect } from 'react-redux';
import { mapStateToPropsWindow } from '../props';

const LandingPage = () => (
  <div className="landing-container">
    <h3 className="app-title">City Hunt</h3>
    <span>Explore your city</span>
    <div className="button-group">
      <RaisedButton label="Login with Google" primary={true} linkButton={true} href="/auth/google" />
    </div>
  </div>
);

export default LandingPage;
