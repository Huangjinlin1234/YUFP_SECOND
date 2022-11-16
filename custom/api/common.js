var getTableData = function (callback, data) {
  yufp.service.request({
    url: backend.uaaService + '/api/common/template',
    method: 'POST',
    callback: function (code, message, response) {
      callback(response);
    }
  });
};
