import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import { connect } from 'react-redux';
import { mapStateToPropsWindow } from '../props';

export class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-container">
        <h3 className="app-title">City Hunt</h3>
        <span>Explore your city</span>
        <div className="button-group">
          <RaisedButton label="Login with Google" primary={true} />
        </div>
      </div>
    );
  }
}

// module.exports = LandingPage;
export const LandingPageContainer = connect(mapStateToPropsWindow)(LandingPage);

