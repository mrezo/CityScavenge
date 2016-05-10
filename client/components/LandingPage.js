import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import { connect } from 'react-redux';
import { mapStateToPropsWindow } from '../props';
import styles from 'material-ui/lib/styles';
import card from 'material-ui/lib/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';

const colors = styles.Colors;

const style = {
  card: {
    marginLeft: 'auto',
    marginRight: 'auto',
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
    fontSize: 18,
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'white',
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
    <card backgroundColor={colors.cyan300}>
      <CardMedia overlay={<CardTitle title="City Hunt" subtitle="Explore your city" style={style.card_title} />}><img src={'https://cdn.getyourguide.com/niwziy2l9cvz/1XBkFZIKqYw0248uGCuaWG/cc3d1c8fec71b6706ac961b449d2d823/san-francisco-san-francisco-bay-1112x630.jpg'} /></CardMedia>
      <div className="button-group">
        <RaisedButton label="Login with Google" backgroundColor={colors.red500} primary={true} />
        <form action="http://www.dodgers.com">
          <input type="file" name="pic" accept="image/*" />
          <input type="submit" />
        </form>
      </div>
    </card>
  </div>
);

// module.exports = LandingPage;
export const LandingPageContainer = connect(mapStateToPropsWindow)(LandingPage);

export default LandingPage;
