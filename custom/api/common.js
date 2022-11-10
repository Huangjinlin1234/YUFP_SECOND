var pubkey = function (callback, data) {
  yufp.service.request({
    url: backend.uaaService + '/api/session/info',
    method: 'POST',
    callback: function (code, message, response) {
      callback(response);
    }
  });
};
