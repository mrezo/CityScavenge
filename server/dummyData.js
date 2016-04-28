var client = require('./config/db');

client.connect();

// add dummy user
client.query("INSERT INTO users (username) VALUES ('Alexander')");
console.log('ran');

client.end();
