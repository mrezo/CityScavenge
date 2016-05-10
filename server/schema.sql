-- If there is already a database with that name, drop it
-- otherwise create it
DROP DATABASE IF EXISTS city_scavenge;
CREATE DATABASE city_scavenge;
\c city_scavenge;

CREATE TABLE users (
  id SERIAL NOT NULL PRIMARY KEY UNIQUE,
  displayname VARCHAR(63) NOT NULL UNIQUE,
  google_id VARCHAR(255) NOT NULL UNIQUE,
  name VARCHAR(63) NOT NULL,
  avatar VARCHAR(63) NOT NULL DEFAULT '',
  total_places_visited INTEGER NOT NULL DEFAULT 0,
  total_distance DOUBLE PRECISION NOT NULL DEFAULT 0.00,
  games_played INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE game (
  id SERIAL NOT NULL PRIMARY KEY UNIQUE,
  winning_user INTEGER REFERENCES users,
  duration TIME NULL DEFAULT NULL,
  start_time TIME NULL DEFAULT NULL,
  finish_time TIME NULL DEFAULT NULL,
  id_task INTEGER NULL DEFAULT NULL
);
   
CREATE TABLE checkpoint (
  id SERIAL NOT NULL PRIMARY KEY UNIQUE,
  id_game INTEGER REFERENCES game,
  latitude DECIMAL NOT NULL DEFAULT 0.0,
  longitude DECIMAL NOT NULL DEFAULT 0.0,
  name VARCHAR(63) NULL DEFAULT NULL,
  picture VARCHAR(63) NULL DEFAULT NULL,
  collision BOOLEAN NOT NULL DEFAULT false,
  is_finish_point BOOLEAN NOT NULL DEFAULT false
);
    
CREATE TABLE task (
  id SERIAL NOT NULL PRIMARY KEY UNIQUE,
  source_user INTEGER REFERENCES users,
  receiver_user INTEGER REFERENCES users,
  id_checkpoint INTEGER REFERENCES checkpoint,
  action VARCHAR(63) NULL DEFAULT NULL,
  picture VARCHAR(255) NULL DEFAULT NULL
);
   
CREATE TABLE game_user (
  id SERIAL NOT NULL PRIMARY KEY UNIQUE,
  id_user INTEGER REFERENCES users,
  id_game INTEGER REFERENCES game
);


-- Dummy Data
INSERT INTO users (displayname, google_id, name) VALUES ('Genevieve', '1734', 'Dolphin'), ('Michael', '254', 'Gray Whale'), ('Alexander', '2345', 'Manatee');

-- INSERT INTO `user` (`id`,`google_id`,`name`,`display_name`,`avatar`,`total_places_visited`,`total_distance`,`games_played`) VALUES
-- ('','','','','','','','');
-- INSERT INTO `game` (`id`,`winner`,`duration`,`start_time`,`finish_time`,`id_task`) VALUES
-- ('','','','','','');
-- INSERT INTO `task` (`id`,`source_user`,`receiver_user`,`id_checkpoint`,`action`,`picture`) VALUES
-- ('','','','','','');
-- INSERT INTO `checkpoint` (`id`,`id_game`,`id_user`,`latitude`,`longitude`,`name`,`picture`,`collision`,`is_finish_point`) VALUES
-- ('','','','','','','','','');
-- INSERT INTO `game_user` (`id`,`id_user`,`id_game`) VALUES
-- ('','','');