import { connect } from 'react-redux';
import DashboardCreateGame from '../components/DashboardCreateGame';
import { assignGameRadius, assignGameName } from '../actions/index';
import getUserLocationAndWatchID from '../lib/locationController';


const mapStateToProps = (state) => {
  return {
    gameName: state.users[0].gameName,
    gameRadius: state.users[0].gameRadius,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitGame: () => {
      console.log('Submit game clicked!');
    },
    handleChangeRadius: (event) => {
      console.log(event.target.value);
      dispatch(assignGameRadius(event.target.value));
    },
    handleChangeName: (event) => {
      console.log(event.target.value);
      dispatch(assignGameName(event.target.value));
    },
    updateUserPosition: () => {
      console.log('AM I STARTING TO TRACK NEW POSITIONS');
      getUserLocationAndWatchID(dispatch);
    },
  };
};

const CreateGameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardCreateGame);

export default CreateGameContainer;
