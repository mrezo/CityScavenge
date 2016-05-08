import React from 'react';
import { connect } from 'react-redux';
import { mapStateToPropsWindow, mapDispatchToPropsWindow } from '../props';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import IconButton from 'material-ui/lib/icon-button';
import FontIcon from 'material-ui/lib/font-icon';
import NavigationExpandMoreIcon from 'material-ui/lib/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/lib/menus/menu-item';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import RaisedButton from 'material-ui/lib/raised-button';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';
import VisibleDashboardLeftNav from '../containers/VisibleDashboardLeftNav';
import VisibleTopAppBar from '../containers/VisibleTopAppBar';
import GoogleMap from '../containers/GoogleMap';
import fetch from 'isomorphic-fetch';

export class GameWindow extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     endLat: 0,
  //     endLng: 0,
  //     userLat: 0,
  //     userLng: 0,
  //     collision: false,
  //     map: 0,
  //     userMarker: 0,
  //     endMarker: 0,
  //   };
  // }

  componentDidMount() {
  }
    // $.ajax({
    //   type: 'GET',
    //   url: '/api/geo/gamestart',
    //   contentType: 'application/json',
    //   dataType: 'json',
    //   success: (data) => {
    //     // TODO dispatch place finish point action
    //     this.setState({
    //       endLat: data.latitude,
    //       endLng: data.longitude,
    //     });
    //     // TODO dispatch to check collisions
    //     this.updateCoords();
    //     // TODO dispatch create map
    //     this.initMap();
    //     // Watch the user's position every minute or so
    //     navigator.geolocation.watchPosition((position) => {
    //       // TODO dispatch user location action
    //       this.setState({
    //         userLat: position.coords.latitude,
    //         userLng: position.coords.longitude,
    //       });
    //       // Delete the current user marker
    //       // TODO dispatch delete user marker action
    //       this.deleteMarker();
    //       // Update the coordinates on the back-end and check for a collision
    //       this.updateCoords();
    //       // TODO Add the new user marker
    //       // dispatch place user marker action
    //       this.placeMarker();
    //     }, () => {
    //       console.log('Geolocation error!');
    //     }, {
    //       enableHighAccuracy: true,
    //       maximumAge: 30000,
    //       timeout: 27000,
    //     });
    //   },
    //   error: (error) => {
    //     console.log('error', error);
    //   },
    // });
  }

  // Updates the coordinates on the back-end and checks for a collision
  updateCoords() {
    $.ajax({
      type: 'POST',
      url: '/api/geo/distance',
      contentType: 'application/json',
      data: JSON.stringify({
        userLatitude: this.state.userLat,
        userLongitude: this.state.userLng,
        endpointLatitude: this.state.endLat,
        endpointLongitude: this.state.endLng,
      }),
      dataType: 'json',
      success: (data) => {
        // dispatch finish point collision action if data === true
        this.setState({
          collision: data,
        });
      },
      error: (error) => {
        console.log('error', error);
      },
    });
  }

  // Initializes the map
  initMap() {
    // const mapOptions = {
    //   center: { lat: 37.7836970, lng: -122.4089660 },
    //   zoom: 15,
    // };

    // this.setState({
    //   map: new google.maps.Map(document.getElementById('map'), mapOptions),
    // });

    // const userOptions = {
    //   position: { lat: this.state.userLat, lng: this.state.userLng },
    //   map: this.state.map,
    //   title: 'user',
    //   label: 'U',
    // };

    // const endOptions = {
    //   position: { lat: this.state.endLat, lng: this.state.endLng },
    //   map: this.state.map,
    //   title: 'Finish',
    //   label: 'F',
    // };

    // this.setState({
    //   userMarker: new google.maps.Marker(userOptions),
    //   endMarker: new google.maps.Marker(endOptions),
    // });
  }

  // Places a marker on the user's location
  // placeMarker() {
  //   const userOptions = {
  //     position: { lat: this.state.userLat, lng: this.state.userLng },
  //     map: this.state.map,
  //     title: 'user',
  //     label: 'U',
  //   };
  //   this.setState({
  //     userMarker: new google.maps.Marker(userOptions),
  //   });
  // }

  // Deletes all markers in the array by removing references to them.
  // deleteMarker() {
  //   this.state.userMarker.setMap(null);
  //   this.setState({ userMarker: 0 });
  // }

  render() {
    return (
      <div className="game-wrapper">
      <VisibleDashboardLeftNav />
      <VisibleTopAppBar />
        <GoogleMap />
        <Toolbar className="bottom-toolbar">
          <ToolbarGroup firstChild={true} float="left">
            <DropDownMenu value={3}>
              <MenuItem value={1} primaryText="All Broadcasts" />
              <MenuItem value={2} primaryText="All Voice" />
              <MenuItem value={3} primaryText="All Text" />
              <MenuItem value={4} primaryText="Complete Voice" />
              <MenuItem value={5} primaryText="Complete Text" />
              <MenuItem value={6} primaryText="Active Voice" />
              <MenuItem value={7} primaryText="Active Text" />
            </DropDownMenu>
          </ToolbarGroup>
          <ToolbarGroup float="right">
            <ToolbarTitle text="Options" />
            <FontIcon className="muidocs-icon-custom-sort" />
            <IconMenu
              iconButtonElement={
                <IconButton touch={true}>
                  <NavigationExpandMoreIcon />
                </IconButton>
              }
            >
              <MenuItem primaryText="Download" />
              <MenuItem primaryText="More Info" />
            </IconMenu>
            <ToolbarSeparator />
            <RaisedButton label="Create Broadcast" primary={true} />
          </ToolbarGroup>
        </Toolbar>
      </div>
    );
  }
}

