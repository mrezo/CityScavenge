import React from 'react';
import { connect } from 'react-redux';
import { mapStateToPropsWindow } from '../props';
import Avatar from 'material-ui/lib/avatar';
import styles from 'material-ui/lib/styles';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import DashboardCard from './DashboardCard';
import VisibleDashboardLeftNav from '../containers/VisibleDashboardLeftNav';
import VisibleTopAppBar from '../containers/VisibleTopAppBar';

// import injectTapEventPlugin from 'react-tap-event-plugin/src/injectTapEventPlugin';
// injectTapEventPlugin();


const colors = styles.Colors;

const Dashboard = () => (
  <div>
    <VisibleDashboardLeftNav />
    <VisibleTopAppBar />
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

export default Dashboard;
