var app = angular.module('homeModule');

app.controller('mainControl', function($scope, mainService) {

  $scope.projects = [
    {
      name: "Project 1",
      content: "Some Content"
    },
    {
      name: "Project 1",
      content: "Some Content"
    }
  ];
  $scope.languages = mainService.languages;

});
