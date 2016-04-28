var pg = require('pg');

var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/city_scavange';

var client = new pg.Client(connectionString);

client.connect();

module.exports = client;
