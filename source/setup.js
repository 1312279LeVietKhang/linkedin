var app = angular.module('myApp', []);
app.controller('myController', function($scope, $http) {
  $http.get('default.json')
  .success(function(response) {
      $scope.myData = response;
  });
});