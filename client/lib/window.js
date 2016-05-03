exports.recentEncounters = (callback) => {
  $.get('/api/recentencounters')
    .retry({ times: 5, timeout: 500 })
    .done((data) => {
      callback(null, data);
    });
};

exports.userEncounters = (username, callback) => {
  $.get('/api/user/encounters/' + username)
    .retry({ times: 5, timeout: 500 })
    .done((data) => {
      callback(null, data);
    });
};

exports.encounter = (userid, callback) => {
  $.post('/api/encounter', userid)
    .retry({ times: 5, timeout: 500 })
    .done((data) => {
      callback(null, data);
    });
};