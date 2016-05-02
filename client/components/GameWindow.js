class GameWindow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      endLat: 0,
      endLng: 0,
      userLat: 0,
      userLng: 0,
      collision: false,
      map: 0,
      userMarker: 0,
      endMarker: 0,
    };
  }

  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: '/api/geo/gamestart',
      contentType: 'application/json',
      dataType: 'json',
      success: (data) => {
        this.setState({
          endLat: data.latitude,
          endLng: data.longitude,
        });
        this.updateCoords();
        this.initMap();
        setInterval(() => {
          // Delete the current user marker
          this.deleteMarker();
          // Get the user's current location
          navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
              userLat: position.coords.latitude,
              userLng: position.coords.longitude,
            });
            // Update the coordinates on the back-end and check for a collision
            this.updateCoords();
            // Add the new user marker
            this.placeMarker();
          });
        }, 3000);
      },
      error: (error) => {
        console.log('error', error);
      },
    });
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
    const mapOptions = {
      center: { lat: 37.7836970, lng: -122.4089660 },
      zoom: 15,
    };

    this.setState({
      map: new google.maps.Map(document.getElementById('map'), mapOptions),
    });

    const userOptions = {
      position: { lat: this.state.userLat, lng: this.state.userLng },
      map: this.state.map,
      title: 'user',
      label: 'U',
    };

    const endOptions = {
      position: { lat: this.state.endLat, lng: this.state.endLng },
      map: this.state.map,
      title: 'Finish',
      label: 'F',
    };

    this.setState({
      userMarker: new google.maps.Marker(userOptions),
      endMarker: new google.maps.Marker(endOptions),
    });

    this.state.map.addListener('click', (event) => {
      this.addMarker(event.latLng);
    });
  }

  // Places a marker on the user's location
  placeMarker() {
    const userOptions = {
      position: { lat: this.state.userLat, lng: this.state.userLng },
      map: this.state.map,
      title: 'user',
      label: 'U',
    };
    this.setState({
      userMarker: new google.maps.Marker(userOptions),
    });
  }

  // Deletes all markers in the array by removing references to them.
  deleteMarker() {
    this.state.userMarker.setMap(null);
    this.setState({ userMarker: 0 });
  }

  render() {
    const style = {
      width: '500px',
      height: '500px',
    };

    return (
      <div id="map" style={style}></div>
    );
  }
}

window.GameWindow = GameWindow;
