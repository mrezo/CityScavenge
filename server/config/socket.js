const socket = require('socket.io');

module.exports = function(server) {

  var players = [];
  var counter = 1;
  var io = socket(server);

  io.on('connection', function(socket) {
    console.log('User connected with socket id: ', socket.id);
    players.push(socket.id);
    console.log('List of Players', players);

    io.to(socket.id).emit('createUser', { title: ++counter, socketId: socket.id, });

    socket.on('newUser', function(data) {
      socket.broadcast.emit('newUser', data);
    });

    socket.on('test', function(data) {
      console.log(data);
      io.sockets.emit('test', data);
    });

    socket.on('setFinishPoint', function(data) {
      console.log('BROADCASTING FINISHPOINT TO SOCKETS', data);
      socket.broadcast.emit('placeFinishPoint', data);
    });
  });
};
