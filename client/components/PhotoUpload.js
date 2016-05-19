import React, { PropTypes } from 'react';
import Dialog from 'material-ui/lib/dialog';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import Camera from 'material-ui/lib/svg-icons/image/camera-alt';

// TODO: add "action: " to form component with post request to DB

const PhotoUpload = ({ checkCollision, checkpoints, currentUser, lat, lng, open, photoUploadStart, photoSubmit }) => (
  <div>
    <FloatingActionButton
      onClick={() => {
        photoUploadStart(lat, lng, open);
      }}
      primary={true} >
      <Camera />
    </FloatingActionButton>
    <Dialog
      title="Check in with a photo"
      open={open}
      modal={false}
    >
      <form>
        <input type="file" name="pic" accept="image/*" />
        <input
          type="submit"
          href="/api/v1/game/photosubmit"
          onClick={(e) => {
            e.preventDefault();
            photoSubmit(lat, lng, open);
            checkCollision(checkpoints, currentUser);
          }}
        />
      </form>
    </Dialog>
  </div>
);

PhotoUpload.propTypes = {
  checkCollision: PropTypes.func.isRequired,
  checkpoints: PropTypes.array.isRequired,
  currentUser: PropTypes.object.isRequired,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  open: PropTypes.bool.isRequired,
  onCollision: PropTypes.func.isRequired,
  photoUploadStart: PropTypes.func.isRequired,
  photoSubmit: PropTypes.func.isRequired,
};

export default PhotoUpload;
