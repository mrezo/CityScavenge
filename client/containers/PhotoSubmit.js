import { connect } from 'react-redux';
import PhotoUpload from '../components/PhotoUpload';

PhotoUpload.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  open: PropTypes.boolean.isRequired,
};

const mapStateToProps = (state) => {
  return {
    lat: state.photoUpload.lat,
    lng: state.photoUpload.lng,
    open: state.photoUpload.open,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    photoUploadStart: (lat, lng, open) => {
      dispatch(photoUploadStart(lat, lng, open));
    },

    photoSubmit: (lat, lng, open) => {
      dispatch(photoSubmit(lat, lng, open));
    },
  };
};

const PhotoSubmitContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoUpload);

export default PhotoSubmitContainer;