class App extends React.Component {
  constructor(props) {
    super(props);

    //Current state of the app
    //===================================
    this.state = {
      currentMap: props.game.fakemap,
      currentUser: props.game.username,
      userImage: props.game.image,
    };
  }

  //Initial rendering of the app
  //===================================
  render(){
    return (
      <div> 
        <div>
        <GameHeader user={this.state.currentUser}/>
        </div>
        <div className='game-window'>
          <GameWindow map={this.state.currentMap}/>
        </div>
      </div> 
    )
  }
}

//Temporary Dummy Data
//===================================
window.dummyGameData = 
  {
    username: 'The Gray Animal',
    image: 'http://www.hdiphonewallpaper.com/uploads/image/Animals/Gray%20animal%20wallpaper.jpg',
    fakemap: 'http://www.codeproject.com/KB/custom-controls/Google-Maps-User-Control/SimpleMap.JPG'
  };

ReactDOM.render(<App game={dummyGameData} />, document.getElementById('app'));

