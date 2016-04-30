class GameWindow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      endLat: 0,
      endLng: 0,
      collision: false,
      markers: [],
      map: 0,
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
        setInterval(() => { this.updateCoords(); }, 3000);
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
        userLatitude: 37.7836970,
        userLongitude: -122.4089660,
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
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Adds a marker on the map to represent a user
    const userOptions = {
      position: { lat: 37.7848606, lng: -122.4130205 },
      map,
      title: 'user',
      label: 'U',
    };
    const userMarker = new google.maps.Marker(userOptions);

    // Adds a marker on the map to represent the finish line location
    const finishLineOptions = {
      position: { lat: this.state.endLat, lng: this.state.endLng },
      map,
      title: 'Finish',
      label: 'F',
    };
    let finishLineMarker = new google.maps.Marker(finishLineOptions);

    // // Adds a marker on the map to represent a user
    // const userOptions = {
    //   position: { lat: 37.7848606, lng: -122.4130205 },
    //   map,
    //   title: 'user',
    //   label: 'U',
    // };
    // let userMarker = new google.maps.Marker(userOptions);

    // // Adds a marker on the map to represent the finish line location
    // const finishLineOptions = {
    //   position: { lat: 37.7836970, lng: -122.4089660 },
    //   map,
    //   title: 'Finish',
    //   label: 'F',
    // };
    // let finishLinemarker = new google.maps.Marker(finishLineOptions);

    map.addListener('click', (event) => {
      const center = { lat: 37.7836970, lng: -122.4089660 };
      this.addMarker(event.latLng);
      // Adds a marker at the center of the map.
      this.addMarker(center);
    });

    this.setState({ map });
  }

  // In the following example, markers appear when the user clicks on the map.
  // The markers are stored in an array.
  // The user can then click an option to hide, show or delete the markers.
  // initMap() {
  //   // This event listener will call addMarker() when the map is clicked.
  //   map.addListener('click', function(event) {
  //     const center = { lat: 37.7836970, lng: -122.4089660 };
  //     addMarker(event.latLng);
  //     // Adds a marker at the center of the map.
  //     addMarker(center);
  //   });
  // }

  // Adds a marker to the map and push to the array.
  addMarker(location) {
    var marker = new google.maps.Marker({
      position: location,
      map: map
    });
    this.markers.push(marker);
  }

  // Sets the map on all markers in the array.
  setMapOnAll(map) {
    for (var i = 0; i < this.state.markers.length; i++) {
      this.markers[i].setMap(map);
    }
  }

  // Removes the markers from the map, but keeps them in the array.
  clearMarkers() {
    this.setMapOnAll(null);
  }

  // Shows any markers currently in the array.
  showMarkers() {
    this.setMapOnAll(map);
  }

  // Deletes all markers in the array by removing references to them.
  deleteMarkers() {
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
          <input onClick={this.deleteMarkers.bind(this)} type="button" value="Delete Markers" />
        </div>      
        <div id="map" style={style} onClick={this.showMarkers}></div>
      </div>
    );
  }
}

window.GameWindow = GameWindow;
