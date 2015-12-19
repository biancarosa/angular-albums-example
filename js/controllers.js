'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('ListAlbumsController', function ($scope, $http) {
    $scope.doSearch = function() {
      if ($scope.search.length > 1) {
        $http({
          method: 'GET',
          url: 'https://api.spotify.com/v1/search?q='+$scope.search+'&type=album&limit=21'
        }).then(function successCallback(response) {
          $scope.albums = response.data.albums.items;
          console.log($scope.albums);
        }, function errorCallback(response) {
          console.log(response);
        });
      }
    }
  });
