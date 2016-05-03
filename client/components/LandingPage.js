const React = require('react');

const LandingPage = () => (
  <div className="landing-container">
    <h3 className="app-title">City Hunt</h3>
    <span>Explore your city</span>
    <div className="button-group">
      <button type="button">Login with Google</button>
      <button type="button">Sign Up To Play</button>
    </div>
  </div>
);

module.exports = LandingPage;
