const socket = require('socket.io');

module.exports = function(server) {

  var counter = 1;
  var io = socket(server);

  var createUser = function (socket) {
    console.log('user connected');
    // is there a way that I can get the user's locaiton from here?
    socket.emit('createUser', { title: counter });
    counter++;
  };

  io.on('connection', createUser);
  // io.on('connection', createUser);
};
