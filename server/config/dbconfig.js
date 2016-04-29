var connectionString = process.env.DATABASE_URL || 'postgres://postgres@localhost:5432/city_scavange';

module.exports = connectionString;