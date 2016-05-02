class GameWindow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      endLat: 0,
      endLng: 0,
      userLat: 0,
      userLng: 0,
      collision: false,
      markers: [],
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
          this.updateCoords();
          navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
              userLat: position.coords.latitude,
              userLng: position.coords.longitude,
            });
            this.deleteMarker();
            this.placeMarker();
          });
        }, 3000);
      },
      error: (error) => {
        console.log('error', error);
      },
    });
  }

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

  // Sets the map on all markers in the array.
  setMapOnAll(map) {
    for (let i = 0; i < this.state.markers.length; i++) {
      this.state.markers[i].setMap(map);
    }
  }

  placeMarker() {
    const userOptions = {
      position: { lat: this.state.userLat, lng: this.state.userLng },
      map: this.state.map,
      title: 'user',
      label: 'U',
    };
    const userMarker = new google.maps.Marker(userOptions);
  }

  // Adds a marker to the map and push to the array.
  addMarker(location) {
    const marker = new google.maps.Marker({
      position: location,
      map: this.state.map,
    });
    this.setState({ markers: this.state.markers.concat(marker) });
  }

  // Removes the markers from the map, but keeps them in the array.
  clearMarkers() {
    this.setMapOnAll(null);
  }

  // Shows any markers currently in the array.
  showMarkers() {
    this.setMapOnAll(this.state.map);
  }

  // Deletes all markers in the array by removing references to them.
  deleteMarkers() {
    this.clearMarkers();
    this.setState({ markers: [] });
  }

  // Deletes all markers in the array by removing references to them.
  deleteMarker(map) {
    this.clearMarkers();
    this.setState({ markers: [] });
  }

  render() {
    const style = {
      width: '500px',
      height: '500px',
    };

    return (
      <div>
        <div id="floating-panel">
          <input onClick={this.deleteMarker.bind(this)} type="button" value="Delete Markers" />
        </div>      
        <div id="map" style={style} onClick={this.showMarkers.bind(this)}></div>
      </div>
    );
  }
}

window.GameWindow = GameWindow;
