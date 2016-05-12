const socket = require('socket.io');

module.exports = function(server) {

  var counter = 1;
  var io = socket(server);

  io.on('connection', function(socket) {

    console.log('user connected');

    socket.emit('createUser', { title: ++counter });

    socket.on('newUser', function(data) {
      io.emit('newUser', data);
    });
  });
};
