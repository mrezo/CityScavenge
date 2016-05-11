import React, { PropTypes } from 'react';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';

//TODO: add "action: " to form componenet with post request to DB

const PhotoUpload = ({ lat, lng, open, photoUploadStart, photoSubmit }) => (
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
        <input type="submit"
          onClick={() => {
            photoSubmit(lat, lng, open);
          }}
        />
      </form>
    </Dialog>
  </div>
);

PhotoUpload.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  open: PropTypes.bool.isRequired,
  photoUploadStart: PropTypes.func.isRequired,
  photoSubmit: PropTypes.func.isRequired,
};

/* const PhotoUpload = () => (
  <div>
    <RaisedButton label="Check In" onTouchTap={this.handleOpen} />
    <Dialog
      title="Dialog With Actions"
      actions={[
        <FlatButton
          label="Cancel"
          primary={true}
          onTouchTap={this.handleClose}
        />,
        <FlatButton
          label="Submit"
          primary={true}
          keyboardFocused={true}
          onTouchTap={this.handleClose}
        />,
      ]}
      modal={false}
      open={this.state.open}
      onRequestClose={this.handleClose}
    >
      The actions in this window were passed in as an array of React objects.
    </Dialog>
  </div>
);
*/ 

export default PhotoUpload;

/*

class DialogExampleSimple extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];
  }
}

*/