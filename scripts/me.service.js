var app = angular.module('homeModule');

app.factory('meSrv', function($http) {

  var info = '';

  return {
    getInfo: function() {
      return info;
    }
  };
});
