var app = angular.module('homeModule');

app.factory('portfolioSrv', function($http) {

  var projects = { maindata: null };
  
  $http({
    method: 'GET',
    url: 'data.json'
  }).then(function(response) {
    projects.maindata = response.data;
  }, function(response) {
    projects = {};
  });

  return {
    getProjects: function() {
      return projects.maindata;
    }
  };
});
