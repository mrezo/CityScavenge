class GameWindow extends React.Component {

  componentDidMount() {
    let mapOptions = {
      center: {lat: 37.7836970, lng: -122.4089660},
      zoom: 15,
    }
    let map = new google.maps.Map(document.getElementById('map'), mapOptions);

    this.setState({map: map});
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
