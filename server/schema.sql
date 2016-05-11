-- If there is already a database with that name, drop it
-- otherwise create it
DROP DATABASE IF EXISTS city_scavenge;
CREATE DATABASE city_scavenge;
\c city_scavenge;

CREATE TABLE users (
  id SERIAL NOT NULL PRIMARY KEY UNIQUE,
  google_id VARCHAR(255) NOT NULL UNIQUE,
  name VARCHAR(63) NOT NULL,
  displayname VARCHAR(63) NOT NULL UNIQUE,
  avatar VARCHAR(63) NOT NULL DEFAULT '',
  total_places_visited INTEGER NOT NULL DEFAULT 0,
  total_distance DOUBLE PRECISION NOT NULL DEFAULT 0.00,
  games_played INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE game (
  id SERIAL NOT NULL PRIMARY KEY UNIQUE,
  winning_user INTEGER REFERENCES users,
  duration DECIMAL NULL DEFAULT NULL,
  start_time TIME NULL DEFAULT NULL,
  finish_time TIME NULL DEFAULT NULL
);
   
CREATE TABLE checkpoint (
  id SERIAL NOT NULL PRIMARY KEY UNIQUE,
  id_game INTEGER REFERENCES game,
  name VARCHAR(63) NULL DEFAULT NULL,
  address VARCHAR(255) NULL DEFAULT '',
  google_place_id VARCHAR(255) NOT NULL DEFAULT '',
  latitude DECIMAL NOT NULL DEFAULT 0.0,
  longitude DECIMAL NOT NULL DEFAULT 0.0,
  picture VARCHAR(63) NULL DEFAULT NULL,
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
  id_users INTEGER REFERENCES users,
  id_game INTEGER REFERENCES game
);

CREATE TABLE checkpoint_users (
  id SERIAL NOT NULL PRIMARY KEY UNIQUE,
  id_users INTEGER REFERENCES users,
  id_checkpoint INTEGER REFERENCES checkpoint,
  collision BOOLEAN NOT NULL DEFAULT false
);

-- Dummy Data
INSERT INTO users (google_id, name, displayname, avatar, total_places_visited, total_distance, games_played) VALUES
('173412351346177882', 'Genevieve', 'Dolphin', '', 1, 50.45, 4),
('234529345201010613', 'Michael', 'Grey Whale', '', 4, 150.00, 62),
('194581005881345923', 'Alexander', 'Manatee', '', 12, 3.30, 4);

INSERT INTO game (winning_user, duration, start_time, finish_time) VALUES
(1, 2.00, '033000', '053000'),
(1, 16.00, '133000', '053000'),
(2, 13.10, '162000', '053000'),
(3, 2.05, '033500', '053000');

INSERT INTO checkpoint (id_game, name, address, google_place_id, latitude, longitude, picture, is_finish_point) VALUES
(1, 'Super 8 San Francisco/Union Square Area', '415 O\Farrell St, San Francisco, CA 94102, United States', 'ChIJjbTjzo-AhYARF-knMk3L7cw', 37.7857596, -122.411828,  '', true),
(2, 'Hotel Bijou', '111 Mason St, San Francisco, CA 94102, United States', 'ChIJLYHZhoWAhYAR4KekZbZtNK0', 37.7844925, -122.4096386,  '', false),
(3, 'Hotel Nikko San Francisco', '222 Mason St, San Francisco, CA 94102, United States', 'ChIJf215c4-AhYAR1jYbKf_Y5X8', 37.7857831, -122.4093486,  '', false),
(1, 'Hotel Zelos', '12 4th St, San Francisco, CA 94103, United States', 'ChIJaasyI4aAhYARSkMTdc_1FyU', 37.78522820000001, -122.4056393,  '', false),
(1, 'Parc 55 San Francisco - A Hilton Hotel', '55 Cyril Magnin St, San Francisco, CA 94102, United States', 'ChIJlzWFioWAhYARpMwCip6lb_M', 37.784887, -122.4056393,  '', false),
(2, 'Hotel Fusion', '140 Ellis St, San Francisco, CA 94102, United States', 'ChIJ0SMraI-AhYAREeJAvm2_yGM', 37.7856912, -122.4085409,  '', false),
(1, 'Hotel Bijou', '111 Mason St, San Francisco, CA 94102, United States', 'ChIJLYHZhoWAhYAR4KekZbZtNK0', 37.7844925, -122.4096386,  '', false),
(4, 'Hotel Nikko San Francisco', '222 Mason St, San Francisco, CA 94102, United States', 'ChIJf215c4-AhYAR1jYbKf_Y5X8', 37.7857831, -122.4093486,  '', false),
(3, 'Hotel Zelos', '12 4th St, San Francisco, CA 94103, United States', 'ChIJaasyI4aAhYARSkMTdc_1FyU', 37.78522820000001, -122.4056393,  '', false),
(1, 'Parc 55 San Francisco - A Hilton Hotel', '55 Cyril Magnin St, San Francisco, CA 94102, United States', 'ChIJlzWFioWAhYARpMwCip6lb_M', 37.784887, -122.4056393,  '', false),
(4, 'Hotel Bijou', '111 Mason St, San Francisco, CA 94102, United States', 'ChIJLYHZhoWAhYAR4KekZbZtNK0', 37.7844925, -122.4096386,  '', false),
(1, 'Hotel Nikko San Francisco', '222 Mason St, San Francisco, CA 94102, United States', 'ChIJf215c4-AhYAR1jYbKf_Y5X8', 37.7857831, -122.4093486,  '', false),
(2, 'Hotel Zelos', '12 4th St, San Francisco, CA 94103, United States', 'ChIJaasyI4aAhYARSkMTdc_1FyU', 37.78522820000001, -122.4056393,  '', false),
(4, 'Parc 55 San Francisco - A Hilton Hotel', '55 Cyril Magnin St, San Francisco, CA 94102, United States', 'ChIJlzWFioWAhYARpMwCip6lb_M', 37.784887, -122.4056393,  '', false);

INSERT INTO task (source_user, receiver_user, id_checkpoint, action, picture) VALUES
(1, 2, 3, 'move location', ''),
(2, 1, 3, 'hide location', ''),
(3, 3, 3, 'hide user', ''),
(1, 3, 3, 'change map', ''),
(2, 1, 3, 'move location', ''),
(1, 1, 3, 'hide user', ''),
(3, 2, 3, 'hide location', ''),
(1, 1, 3, 'hide user', ''),
(3, 2, 3, 'change map', '');

INSERT INTO game_user (id_users, id_game) VALUES
(1, 1),
(2, 1),
(3, 1),
(1, 2),
(2, 2),
(3, 2),
(1, 3),
(2, 3),
(3, 3),
(1, 4),
(2, 4),
(3, 4);

INSERT INTO checkpoint_users (id_users, id_checkpoint, collision) VALUES
(1, 1, true),
(2, 10, false),
(3, 11, true),
(2, 7, false),
(3, 2, true),
(1, 3, false),
(1, 8, false),
(2, 1, true),
(1, 6, false),
(2, 1, true),
(3, 9, false),
(3, 2, true),
(2, 12, false),
(1, 1, false),
(3, 4, false);
