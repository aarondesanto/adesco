var app = angular.module('homeModule');

app.factory('mainService', function() {
  return { languages: ["HTML", "CSS", "JS", "Angular", "jQuery"] };
});
