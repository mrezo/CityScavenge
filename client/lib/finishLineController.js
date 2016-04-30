exports.searchGoogle = (userLatitude, userLongitude, GOOGLE_PLACES_API_KEY, userLocation) => {
  let placesObj = (googlePlacesData) => {
    return {
      name: googlePlacesData.name,
      address: googlePlacesData.formatted_address,
      googlePlaceId: googlePlacesData.place_id,
      latitude: googlePlacesData['geometry']['location']['lat'],
      longitude: googlePlacesData['geometry']['location']['lng'],
      url: '',
      rating: Math.round(googlePlacesData.rating),
      numberOfReviews: googlePlacesData.reviews.length,
    };
  };
  // var xhr = new XMLHttpRequest();
  // xhr.open('GET', 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
  //     + '&location=' + userLocation.latitude + ',' + userLocation.longitude
  //     + '&radius=' + 3200
  //     + '&key=' + GOOGLE_PLACES_API_KEY
  //     + '&types=' + 'park|bar|restaurant|cafe|point_of_interest|natural_feature'
  // );
  const defaultCorsHeaders = {
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'access-control-allow-headers': 'content-type, accept',
    'access-control-max-age': 10 // Seconds.
  };
  $.ajax({
    url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
      + '&location=' + userLocation.latitude + ',' + userLocation.longitude
      + '&radius=' + 3200
      + '&key=' + GOOGLE_PLACES_API_KEY
      + '&types=' + 'park|bar|restaurant|cafe|point_of_interest|natural_feature',
    data: '',
    type: 'GET',
    crossDomain: true,
    dataType: 'jsonp',
    beforeSend: (request) => {
      request.setRequestHeader('access-control-allow-origin', '*');
    },
    success: () => { alert('Success'); },
    error: () => { alert('Failed!'); },
  });
  $.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
      + '&location=' + userLocation.latitude + ',' + userLocation.longitude
      + '&radius=' + 3200
      + '&key=' + GOOGLE_PLACES_API_KEY
      + '&types=' + 'park|bar|restaurant|cafe|point_of_interest|natural_feature'
    )
    .fail((err) => {
      console.log('google places API call failure', err);
    })
    .done((data) => {
      // parse the data
      data = JSON.parse(data);
      // check that there is data
      if (data.results && data.results.length > 0) {
        // randomly pick a location
        const rand = Math.floor(Math.random() * data.results.length);
        return data.results[rand];
      } else {
        return { result: 'No place found' };
      }
    })
    .then((place) => {
        $.get('https://maps.googleapis.com/maps/api/place/details/json?'
          + 'key=' + GOOGLE_PLACES_API_KEY
          + '&placeid=' + place.place_id
        )
        .then((locationData) => {
          const formattedLocation = JSON.parse(locationData).result;
          placesObj = placesObj(formattedLocation);
          // endpoint.latitude = formattedLocation.geometry.location.lat;
          // endpoint.longitude = formattedLocation.geometry.location.lng;
          return JSON.parse(placesObj);
        });
    });
};

exports.getDistance = (req, res) => {
  $.get('https://maps.googleapis.com/maps/api/distancematrix/json?'
    + 'units=imperial'
    + '&origins=' + +userLocation.latitude + ',' + +userLocation.longitude
    + '&destinations=' + +req.body.endpointLatitude + '%2C' + +req.body.endpointLongitude
    + '&key=' + GOOGLE_PLACES_API_KEY
  )
  .fail((err) => {
    console.log('Google Distance Matrix API call failure', err);
  })
  .done((data) => {
    res.json(JSON.parse(data));
  });
};
