import React from 'react';
import { connect } from 'react-redux';
import { mapStateToPropsWindow } from '../props';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import DashboardCard from './DashboardCard';
import VisibleDashboardLeftNav from '../containers/VisibleDashboardLeftNav';
import VisibleTopAppBar from '../containers/VisibleTopAppBar';
import PhotoUpload from './PhotoUpload';
import { Link } from 'react-router';

// import injectTapEventPlugin from 'react-tap-event-plugin/src/injectTapEventPlugin';
// injectTapEventPlugin();

const Dashboard = () => (
  <div>
    <VisibleDashboardLeftNav />
    <VisibleTopAppBar />
    <PhotoUpload />
    <div>
      <img className="main-image" src={'https://cdn.getyourguide.com/niwziy2l9cvz/1XBkFZIKqYw0248uGCuaWG/cc3d1c8fec71b6706ac961b449d2d823/san-francisco-san-francisco-bay-1112x630.jpg'} />
    </div>
    <Tabs>
      <Tab onClick={() => { alert(' TESTING'); }} label="Old Games" >
        <div>
          <DashboardCard />
          <DashboardCard />
        </div>
      </Tab>
      <Tab label="Create Game" containerElement={<Link to="/game" />} />
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
