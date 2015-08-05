'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers', 'ngRoute'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'partials/list.html',
      controller: 'ListAlbumsController'
    }).
    otherwise({
      redirectTo: '/'
    });
    
});