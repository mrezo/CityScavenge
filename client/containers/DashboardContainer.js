import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';
import { startGame } from '../actions/map';
import { initialPosition } from '../lib/locationController';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFinishPoint: () => {
      // Gets player initial location
      initialPosition(dispatch, (positionData) => {
        const mapOptions = {
          center: { lat: positionData.latitude, lng: positionData.longitude },
          zoom: 15,
        };
        // create a google map
        const googleMap = new google.maps.Map(document.getElementById('map'), mapOptions);
      
        // get's the final location by calling gamestart and dispatches placefinish point in action
        startGame(dispatch, googleMap, positionData.latitude, positionData.longitude);
      });
    },
  };
};

const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

export default DashboardContainer;



