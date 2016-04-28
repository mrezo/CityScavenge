-- If there is already a database with that name, drop it
-- otherwise create it
DROP DATABASE IF EXISTS city_scavange;
CREATE DATABASE city_scavange;
\c city_scavange;

CREATE TABLE users (
  id SERIAL NOT NULL PRIMARY KEY,
  username VARCHAR(61) NOT NULL
)

-- Dummy Data
-- INSERT INTO users (username) VALUES ('Alexander');
