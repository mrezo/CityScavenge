import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';
import { getFinishPoint } from '../actions/map';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    createFinishPoint: () => {
      getFinishPoint(dispatch);
    },
  };
};

const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

export default DashboardContainer;



