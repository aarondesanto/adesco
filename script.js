var app = angular.module('homeModule', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home.html',
      controller: 'mainControl'
    })
    .when('/me', {
      templateUrl: 'me.html',
      controller: 'mainControl'
    })
    .when('/portfolio', {
      templateUrl: 'portfolio.html',
      controller: 'mainControl'
    })
    .when('/contact', {
      templateUrl: 'contact.html',
      controller: 'mainControl'
    })
    .otherwise({
      templateUrl: '404.html',
      controller: 'mainControl'
  });

  $locationProvider.html5Mode(true);

});

app.controller('mainControl', function() {

});
