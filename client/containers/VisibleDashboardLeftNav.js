import { connect } from 'react-redux';
import DashboardLeftNav from '../components/DashboardLeftNav';
import { toggleNav } from '../actions/index';

const mapStateToProps = (state) => {
  return {
    visible: state.leftNav.visible,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleToggle: () => {
      dispatch(toggleNav());
    },
  };
};

const VisibleDashboardLeftNav = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardLeftNav);

export default VisibleDashboardLeftNav;
