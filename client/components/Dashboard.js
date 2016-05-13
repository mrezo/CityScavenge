import React from 'react';
import { Link } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin/src/injectTapEventPlugin';
import { Tabs, Tab } from 'material-ui/lib/tabs/index';
import DashboardCard from './DashboardCard';
import VisibleDashboardLeftNav from '../containers/VisibleDashboardLeftNav';
import VisibleTopAppBar from '../containers/VisibleTopAppBar';
import UserProfile from '../components/UserProfile';

injectTapEventPlugin();

const Dashboard = () => (
  <div>
    <VisibleDashboardLeftNav />
    <VisibleTopAppBar />
    <div>
      <img className="main-image" src={'https://cdn.getyourguide.com/niwziy2l9cvz/1XBkFZIKqYw0248uGCuaWG/cc3d1c8fec71b6706ac961b449d2d823/san-francisco-san-francisco-bay-1112x630.jpg'} />
    </div>
    <Tabs>
      <Tab onClick={() => { console.log(' TESTING'); }} label="Old Games" >
        <div>
          <DashboardCard />
          <DashboardCard />
        </div>
      </Tab>
      <Tab label="Create Game" containerElement={<Link to="/game" />} />
      <Tab label="Stats" >
        <div>
          <UserProfile />
        </div>
      </Tab>
    </Tabs>
  </div>
);

export default Dashboard;
