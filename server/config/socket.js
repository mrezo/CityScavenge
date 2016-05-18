const socket = require('socket.io');

module.exports = function(server) {

  var players = [];
  var counter = 1;
  var io = socket(server);

  io.on('connection', function(socket) {
    players.push(socket.id);

    io.to(socket.id).emit('createUser', { title: ++counter, socketId: socket.id });

    socket.on('newUser', function(data) {
      socket.broadcast.emit('newUser', data);
    });

    socket.on('sendMeToNewUser', function(data) {
      io.to(data.socketId).emit('addOtherUser', data.currentUser);
    });

    socket.on('test', function(data) {
      io.sockets.emit('test', data);
    });

    socket.on('setFinishPoint', function(data) {
      socket.broadcast.emit('placeFinishPoint', data);
    });

    socket.on('setCheckpoint', function(data) {
      socket.broadcast.emit('placeCheckpoint', data);
    });

    socket.on('updateUserPosition', function(data) {
      console.log('Updating user position', data.socketId);
      socket.broadcast.emit('updateUserPosition', data);
    });
  });
};
