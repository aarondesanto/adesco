var app = angular.module("homeModule");

app.controller("mainControl", function($scope, meSrv, portfolioSrv) {

  $scope.projects = portfolioSrv.getProjects();

});
