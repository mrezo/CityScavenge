// var GameWindow = ({map}) =>
// <div>
//     <h3>Current Game: FIND THE CROISSANT</h3>
//     <div className="game-map">
//         <img src={map} />
//     </div>
// </div>



const GameWindow = React.createClass({

        componentDidMount: function () {
                var mapOptions = {
                        center: {lat: 37.7836970, lng: -122.4089660},
                        zoom: 15,
                },
                map = new google.maps.Map(document.getElementById('map'), mapOptions);

                this.setState({map: map});
        },

        render: function () {
                var style = {
                        width: '500px',
                        height: '500px',
                };

                return (
                        <div id='map' style={style}></div>
                );
        }
});

window.GameWindow = GameWindow;
