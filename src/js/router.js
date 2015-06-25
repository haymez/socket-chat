require('angular');

var App = angular.module('SocketChat', []);

var fn = function($scope) {
  $scope.input = '';
}

App.controller('test', ['$scope', fn]);