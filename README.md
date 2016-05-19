[![Build Status](https://secure.travis-ci.org/FuturisticSalamander/CityScavenge.svg?branch=master)](http://travis-ci.org/FuturisticSalamander/CityScavenge)

# City Scavenge

City Scavenge is a real-time scavenger hunt application that will send you on a chase around your city to find a croissant before your competition does. It utilizes the Google Maps API to find your current location and place a croissant at a random interest area within two miles. Anyone can play, but you'll need to sign in with a Google account to begin your journey. Enjoy!

**Screenshot**  
![Landing Page](http://i.imgur.com/BZ2Th80.png)

## Table of Contents

1. [Overview](#overview)
2. [Usage](#usage)
3. [Requirements](#requirements)
4. [Development](#development)
5. [Installing Dependencies](#installing-dependencies)
6. [Deployment](#deployment)
7. [Contributing](#contributing)
8. [Meet the Engineers](#meet-the-engineers)
9. [Testing](#testing)

## Overview

### Tech Stack
- [React](https://facebook.github.io/react/) and [Redux](http://redux.js.org/)
- [Node](https://nodejs.org/en/) and [Express](http://expressjs.com/)
- [Postgres](http://www.postgresql.org/)

#### Webpack
Webpack bundles dependencies into one file, so that all dependencies can be loaded into the DOM with a single `<script>` tag.  Webpack starts with an entry file (`App.js`) and traverses the project’s dependencies based on the `import` and `export` statements in the code. It uses a `webpack.config.js` file in the root directory to define which loaders are required for compilation and the destination of the output file.

#### React and Redux
On the client side, the state of the app is maintained in a Redux store. We render the index page by initializing this store. When a user interacts with the app (e.g. when the "start game"; is clicked, for example), an action is triggered, which tells the reducers how the state should update in response (e.g. render a pin at a random location on the map). For more information, review the [Redux documentation](http://redux.js.org/index.html) and watch [Getting Started with Redux](https://egghead.io/series/getting-started-with-redux).

#### Architecture
![Architecture design](http://i.imgur.com/AYNorBl.png)

#### Schema
User data and saved places are managed in a Postgres database called `city_scavenge`.
![Schema design](http://i.imgur.com/FpiUDaX.png)

## Usage
You'll need API keys for [Google Maps](https://developers.google.com/maps/documentation/javascript/get-api-key), [Google Maps Geolocation](https://developers.google.com/maps/documentation/geolocation/get-api-key), and for ??[Google Places](https://developers.google.com/places/web-service/get-api-key)??. Add these to the config files in `/server/config`, following the format of the example files. Remove `.example` from the filename.
Ensure all [dependencies](#installing-dependencies) are installed. Start a Postgres server by running `??`. Then, from within the root directory:
```
npm install
webpack
npm start
```

Visit `localhost:1337` in the browser.

## Requirements

- Node 0.10.x
- Postgres 9.5.2
- [Google Maps API key](https://developers.google.com/maps/documentation/javascript/get-api-key)
- [Google Maps Geolocation API key](https://developers.google.com/maps/documentation/geolocation/get-api-key)
- ??[Google Places API key](https://developers.google.com/places/web-service/get-api-key)??

## Development

### Installing Dependencies

From within the root directory:

```
npm install -g nodemon webpack grunt
npm install
```

### Setting up the database

From within the root directory:

```
psql -f server/schema.sql
```

### Running Locally

To compile client-side code and start the server, run:
```
npm start
```
`npm start` will recompile a `bundle.js` file when any client-side JS files have changed, streamlining the development workflow.

Visit `localhost:1337` in the browser.

## Deployment
#### TBD once deployed

#### Deploying New Changes
#### TBD once deployed

- Go to `xxx.xxx.xx.x:??` to see your site live

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

=====================
## Testing
```
npm start
```

TBD:
socket.io
