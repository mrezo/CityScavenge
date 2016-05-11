var express = require('express');
var path = require('path');
var passport = require('passport');
var socket = require('./config/socket.js');

var app = express();

// Required for Socket.io
var server = require('http').createServer(app);
socket(server);
// var io = require('socket.io')(server);

require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

var port = process.env.PORT || 1337;

// Start the server
server.listen(port);

console.log(port + 'server started!');

module.exports = app;
