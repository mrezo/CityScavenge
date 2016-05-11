import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';

const submitForm = () => (
  <form action="http://www.dodgers.com">
    <input type="file" name="pic" accept="image/*" />
    <input type="submit" />
  </form>
);

const PhotoUpload = () => (
  <div>
    <RaisedButton label="Check In" onClick={() => { alert(' TESTING'); }} primary={true} />
    <Dialog
      title="Check in with a photo"
      open={true}
      modal={false}
    >
      The actions in this window come from an HTML form, but they can also be passed in as an array of React objects.
      <form action="http://www.dodgers.com">
        <input type="file" name="pic" accept="image/*" />
        <input type="submit" />
      </form>
    </Dialog>
  </div>
);

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