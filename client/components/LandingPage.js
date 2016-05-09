import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import { connect } from 'react-redux';
import { mapStateToPropsWindow } from '../props';
import styles from 'material-ui/lib/styles';
import card from 'material-ui/lib/card';
import cardHeader from 'material-ui/lib/card/card-header';
import cardMedia from 'material-ui/lib/card/card-media';
import cardTitle from 'material-ui/lib/card/card-title';
import cardText from 'material-ui/lib/card/card-text';

const colors = styles.Colors;

const style = {
  card: {
    marginTop: 20,
    cursor: 'pointer',
    borderRadius: 10,
  },
  card_title: {
    fontWeight: 100,
    fontSize: 20,
    lineHeight: '24px',
  },
  card_text: {
    fontWeight: 100,
    fontSize: 14,
  },
  badge: {
    float: 'right',
    marginTop: 5,
    marginRight: 10,
    marginLeft: -20,
    zIndex: 1,
  },
  card_header: {
    backgroundColor: colors.grey200,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
};


const LandingPage = () => (
  <div className="landing-container">
    <card>
      <cardTitle style={style.card_title}>City Hunt</cardTitle>
      <div>
        <cardText style={style.card_text}>Explore your city</cardText>
      </div>
      <div className="button-group">
        <RaisedButton label="Login with Google" backgroundColor={colors.cyan300} primary={true} />
      </div>
    </card>
  </div>
);

// module.exports = LandingPage;
export const LandingPageContainer = connect(mapStateToPropsWindow)(LandingPage);

export default LandingPage;
