-- If there is already a database with that name, drop it
-- otherwise create it
DROP DATABASE IF EXISTS city_scavenge;
CREATE DATABASE city_scavenge;
\c city_scavenge;

CREATE TABLE users (
  id SERIAL NOT NULL PRIMARY KEY,
  username VARCHAR(61) NOT NULL UNIQUE
);

-- Dummy Data
INSERT INTO users (username) VALUES ('Genevieve'), ('Michael'), ('Alexander');