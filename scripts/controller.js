var app = angular.module('homeModule');

app.controller('mainControl', function($scope, portfolioSrv) {

  $scope.projects = portfolioSrv.getProjects();

});
