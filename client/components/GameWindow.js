class GameWindow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
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
    let userMarker = new google.maps.Marker(userOptions);

    // Adds a marker on the map to represent the finish line location
    const finishLineOptions = {
      position: { lat: 37.7836970, lng: -122.4089660 },
      map,
      title: 'Finish',
      label: 'F',
    };
    let finishLinemarker = new google.maps.Marker(finishLineOptions);
    this.setState({ map });
  }

  render() {
    const style = {
            width: '500px',
            height: '500px',
    };

    return (
      <div id='map' style={style}></div>
    );
  }
}

window.GameWindow = GameWindow;
