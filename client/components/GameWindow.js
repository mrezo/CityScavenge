class GameWindow extends React.Component {

  componentDidMount() {
    const mapOptions = {
      center: {lat: 37.7836970, lng: -122.4089660},
      zoom: 15,
    };
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    const finalLocationOptions = {
      position: { lat: 37.7836970, lng: -122.4089660 },
      map,
      title: 'Finish',
    };
    let marker = new google.maps.Marker(finalLocationOptions);
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
