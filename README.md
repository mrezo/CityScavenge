[![Build Status](https://secure.travis-ci.org/FuturisticSalamander/CityScavenge.svg?branch=master)](http://travis-ci.org/FuturisticSalamander/CityScavenge)

# City Scavenge

City Scavenge is a real-time scavenger hunt application that will send you on a chase around your city to find a croissant before your competition does. It utilizes the Google Maps API to find your current location and place a croissant at a random interest area within two miles. Anyone can play, but you'll need to sign in with a Google account to begin your journey. Enjoy!

![Landing Page](http://i.imgur.com/BZ2Th80.png)

## Table of Contents

1. [Overview](#overview)
2. [Requirements](#requirements)
3. [Installation](#installation)
4. [Deployment](#deployment)
5. [Contributing](#contributing)
6. [Meet the Engineers](#meet-the-engineers)
7. [Questions and Issues](#questions-and-issues)

=====================
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

=====================
## Requirements

- Node 0.10.x
- PostgreSQL 9.5.2
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

=====================
## Installation

From within the root directory, install the global dependencies and the local dependencies

```
$ npm install -g nodemon webpack grunt
$ npm install
```

### Setting up the database

First start your PostgreSQL server

Next, from within the root directory, create the database and tables in PostgreSQL

```
$ psql -f server/schema.sql
```

### Setting up the Google API keys

Add your Google API credentials to the config files in `/server/config`, following the format of the example files.

Remove `.example` from the filename.

### Running Locally

Compile client-side code and start the server
```
$ npm start
```

Visit `localhost:1337` in the browser.

### Testing

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

City Scavenge was built using waffle.io as the project organization tool.
See [CONTRIBUTING.md](https://github.com/FuturisticSalamander/CityScavenge/blob/master/.github/CONTRIBUTING.md) for contribution guidelines.

=====================
## Meet The Engineers
Product Owner
- [Michael Balarezo](https://github.com/mrezo)

Scrum Master
- [Alexander Turinske](https://github.com/alexanderturinske)

Development Team
- [Genevieve Sublette](https://github.com/Genevieve1722)

=====================
## Questions and Issues
For any issues, please refer to [our issues page](https://github.com/FuturisticSalamander/CityScavenge/issues)
Please direct any questions regarding City Scavenge to [our wiki page](https://github.com/FuturisticSalamander/CityScavenge/wiki)

Thank you!
