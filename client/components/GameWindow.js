class GameWindow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      endLat: 0,
      endLng: 0,
      collision: false,
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
        this.initMap();
      },
      error: (error) => {
        console.log('error', error);
      },
    });

    $.ajax({
      type: 'POST',
      url: '/api/geo/distance',
      contentType: 'application/json',
      data: {
        userLatitude: 37.7836970,
        userLongitude: -122.4089660,
        endpointLatitude: this.state.endLat,
        endpointLongitude: this.state.endLng,
      },
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
    this.setState({ map });
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
