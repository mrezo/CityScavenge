[![Build Status](https://secure.travis-ci.org/FuturisticSalamander/CityScavenge.svg?branch=master)](http://travis-ci.org/FuturisticSalamander/CityScavenge)

# City Scavenge

City Scavenge is a real-time scavenger hunt application that will send you on a chase around your city to find a croissant before your competition does. It utilizes the Google Maps API to find your current location and place a croissant at a random interest area within two miles. Anyone can play, but you'll need to sign in with a Google account to begin your journey. Enjoy!

**Screenshot**  
![Landing Page](http://i.imgur.com/BZ2Th80.png)

## Table of Contents

1. [Overview](#overview)
2. [Requirements](#requirements)
3. [Development](#development)
4. [Installation](#installation)
5. [Deployment](#deployment)
6. [Contributing](#contributing)
7. [Meet the Engineers](#meet-the-engineers)

## Overview

### Technologies
- [React](https://facebook.github.io/react/) and [Redux](http://redux.js.org/)
- [Socket.IO](http://socket.io/)
- [Node](https://nodejs.org/en/) and [Express](http://expressjs.com/)
- [PostgreSQL](http://www.postgresql.org/)

#### Architecture
![Architecture design](http://i.imgur.com/AYNorBl.png)

#### Schema
User data and saved places are managed in a Postgres database called `city_scavenge`.
![Schema design](http://i.imgur.com/FpiUDaX.png)

## Requirements

- Node 0.10.x
- Postgres 9.5.2
- [Google Maps API key](https://developers.google.com/maps/documentation/javascript/get-api-key)
  * Enable the following Google APIs
    - Google Maps JavaScript API
    - Google Maps Embeded API
    - Google Maps Directions API
    - Google Maps Distance Matrix API
    - Google Maps Geocoding API
    - Google Maps API Web Service
    - Google Maps Elevation API
    - Google+ API
- [Google OAuth 2.0 Client Credentials](https://developers.google.com/identity/protocols/OAuth2)

## Development

### Installation

You'll need API keys for [Google Maps](https://developers.google.com/maps/documentation/javascript/get-api-key), [Google Maps Geolocation](https://developers.google.com/maps/documentation/geolocation/get-api-key), and for [Google Places](https://developers.google.com/places/web-service/get-api-key). Add these to the config files in `/server/config`, following the format of the example files. Remove `.example` from the filename.
Ensure all [dependencies](#installing-dependencies) are installed. Start a Postgres server by running `??`. Then, from within the root directory:
```
$ npm install
$ webpack
$ npm start
```

Visit `localhost:1337` in the browser.

From within the root directory:

```
$ npm install -g nodemon webpack grunt
$ npm install
```

### Setting up the database

From within the root directory:

```
$ psql -f server/schema.sql
```

### Running Locally

To compile client-side code and start the server, run:
```
$ npm start
```

Visit `localhost:1337` in the browser.

=====================
## Testing

First install all dependencies
```
$ npm install
```

Now run the tests
```
$ npm test
```

=====================
## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

=====================
## Meet The Engineers
Product Owner
- [**Michael Balarezo**](https://github.com/mrezo)

Scrum Master
- [**Alexander Turinske**](https://github.com/alexanderturinske)

Development Team
- [**Genevieve Sublette**](https://github.com/Genevieve1722)
