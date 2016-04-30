class GameWindow extends React.Component ({

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
