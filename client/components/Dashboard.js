import injectTapEventPlugin from 'react-tap-event-plugin/src/injectTapEventPlugin';
import { Tabs, Tab } from 'material-ui/lib/tabs/index';
import React, { Component, PropTypes } from 'react';
import Avatar from 'material-ui/lib/avatar';
import styles from 'material-ui/lib/styles';
import DashboardCard from './DashboardCard';
import VisibleDashboardLeftNav from '../containers/VisibleDashboardLeftNav';
import VisibleTopAppBar from '../containers/VisibleTopAppBar';
import CreateGameContainer from '../containers/CreateGame';
import UserProfile from '../components/UserProfile';

injectTapEventPlugin();

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <VisibleDashboardLeftNav />
        <VisibleTopAppBar />
        <div>
          <img className="main-image" src={'https://cdn.getyourguide.com/niwziy2l9cvz/1XBkFZIKqYw0248uGCuaWG/cc3d1c8fec71b6706ac961b449d2d823/san-francisco-san-francisco-bay-1112x630.jpg'} />
        </div>
        <Tabs>
          <Tab
            label="Old Games"
          >
            <div>
              <DashboardCard />
              <DashboardCard />
            </div>
          </Tab>
          <Tab
            label="Create Game"
            onActive={this.props.createFinishPoint}
            onActive={this.props.sendGameInformation}
          >
            <div>
              <CreateGameContainer />
              <h2>Currently Available Games</h2>
              <p>Here we can put a whole list of games that are available to begin playing.</p>
            </div>
          </Tab>
          <Tab label="Stats" >
            <div>
              <UserProfile />
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

Dashboard.propTypes = {
  sendGameInformation: PropTypes.func.isRequired,
  createFinishPoint: PropTypes.func.isRequired,
  fetchUser: PropTypes.func.isRequired,
};

export default Dashboard;
