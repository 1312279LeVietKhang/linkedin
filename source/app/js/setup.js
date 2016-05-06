var app = angular.module('myApp', []);
app.controller('myController', function($scope, $http) {
  $http.get('json/default.json')
  .success(function(response) {
      $scope.myData = response;
  });

  $scope.changeName = function(name){
  	$scope.myData.PROFILE.Name = name;
  }
  $scope.changeHeadline = function(headline){
  	$scope.myData.PROFILE.Headline = headline;
  }
  $scope.changejob = function(job){
  	$scope.myData.PROFILE.MyWork = job;
  }
  $scope.changeEducation = function(education){
  	$scope.myData.PROFILE.Education = education;
  }
});