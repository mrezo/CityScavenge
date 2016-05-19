import React, { PropTypes } from 'react';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';

// TODO: add "action: " to form component with post request to DB

const PhotoUpload = ({ checkCollision, checkpoints, currentUser, lat, lng, open, photoUploadStart, photoSubmit }) => (
  <div>
    <RaisedButton
      label="Check In"
      onClick={() => {
        photoUploadStart(lat, lng, open);
      }}
      primary={true} />
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
