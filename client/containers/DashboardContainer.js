import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';
import { getFinishPoint } from '../actions/map';
import { fetchCurrentUser, createGame } from '../actions/index';
import { updateUserWithGoogle } from '../actions/user';
import { getUserLocationAndWatchID } from '../lib/locationController';


const mapStateToProps = (state) => {
  return {
    avatarImg: state.currentUser.avatar,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendGameInformation: () => {
      createGame(dispatch);
    },
    createFinishPoint: () => {
      getFinishPoint(dispatch);
    },
    fetchUser: () => {
      fetchCurrentUser(dispatch, function(data) {
        dispatch(updateUserWithGoogle(data));
      });
    },
    updateUserPosition: () => {
      console.log('AM I STARTING TO TRACK NEW POSITIONS');
      getUserLocationAndWatchID(dispatch);
    },
  };
};

const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

export default DashboardContainer;



