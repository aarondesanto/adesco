var app = angular.module('homeModule', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'mainControl'
    })
    .when('/me', {
      templateUrl: 'partials/me.html',
      controller: 'mainControl'
    })
    .when('/portfolio', {
      templateUrl: 'partials/portfolio.html',
      controller: 'mainControl'
    })
    .when('/contact', {
      templateUrl: 'partials/contact.html',
      controller: 'mainControl'
    })
    .otherwise({
      templateUrl: 'partials/404.html',
      controller: 'mainControl'
  });

  $locationProvider.html5Mode(true);

});
