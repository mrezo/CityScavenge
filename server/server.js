var express = require('express');
var path = require('path');
var passport = require('passport');

var app = express();

require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

var port = process.env.PORT || 1337;

if (!module.parent){
  app.listen(port);
}

console.log(port + ' server started!');

module.exports = app;
