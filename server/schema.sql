-- If there is already a database with that name, drop it
-- otherwise create it
DROP DATABASE IF EXISTS city_scavenge;
CREATE DATABASE city_scavenge;
\c city_scavenge;

CREATE TABLE users (
  id SERIAL NOT NULL PRIMARY KEY,
  displayname VARCHAR(63) NOT NULL UNIQUE,
  google_id VARCHAR(255) NOT NULL UNIQUE,
  name VARCHAR(63) NOT NULL
);

-- Dummy Data
INSERT INTO users (displayname, google_id, name) VALUES ('Genevieve', '1734', 'Dolphin'), ('Michael', '254', 'Gray Whale'), ('Alexander', '2345', 'Manatee');