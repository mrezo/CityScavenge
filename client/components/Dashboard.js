import React from 'react';
import { connect } from 'react-redux';
import { mapStateToPropsWindow } from '../props';
import AppBar from 'material-ui/lib/app-bar';
import Avatar from 'material-ui/lib/avatar';
import styles from 'material-ui/lib/styles';
import LeftNav from 'material-ui/lib/left-nav';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import MenuItem from 'material-ui/lib/menus/menu-item';
import DashboardCard from './DashboardCard';

// import injectTapEventPlugin from 'react-tap-event-plugin/src/injectTapEventPlugin';
// injectTapEventPlugin();


const colors = styles.Colors;

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(e) {
    e.preventDefault();
    this.setState({ open: !this.state.open });
  }

  handleClose(e) {
    e.preventDefault();
    this.setState({ open: false });
  }


  render() {
    return (
      <div>
        <LeftNav docked={false} width={200} open={this.state.open} onRequestChange={open => this.setState({ open })}>
          <MenuItem onClick={this.handleToggle}>Logout</MenuItem>
        </LeftNav>
        <AppBar title="City Hunt" iconClassNameRight="muidocs-icon-navigation-expand-more" onClick={this.handleToggle} onLeftIconButtonTouchTap={() => console.log('YO YO YO')} />
        <div className="dash-jumbotron">
          <Avatar style={{ display: 'block', margin: '0 auto' }} color={colors.deepOrange300} backgroundColor={colors.purple500} size={150}>W</Avatar>
        </div>
        <Tabs>
          <Tab onClick={() => { alert(' TESTING'); }} label="Old Games" >
            <div>
              <DashboardCard />
              <DashboardCard />
            </div>
          </Tab>
          <Tab label="Current Games" >
            <div>
              <h2>Currently Available Games</h2>
              <p>Here we can put a whole list of games that are available to begin playing.</p>
            </div>
          </Tab>
          <Tab label="Stats" >
            <div>
              <h2>Tab Three</h2>
              <p>
                Here was can have a table with icons of all the stats. w00t w00t
              </p>
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export const DashboardContainer = connect(mapStateToPropsWindow)(Dashboard);

