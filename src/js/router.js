require('angular');

var App = angular.module('SocketChat', []);

var fn = function($scope) {
  $scope.chatInput = ''
  $scope.hasUserName = false;
  $scope.userName = '';

  var chatServer = new WebSocket("ws://localhost:3000");
  chatServer.onopen = function(event) {
  }
  chatServer.onmessage = function (event) {
    $scope.messages = JSON.parse(event.data);
    $scope.$apply();
  }

  $scope.setUserName = function() {
    $scope.hasUserName = true
  }

  $scope.sendChat = function() {
    var chatObj = {
      text: $scope.chatInput,
      userName: $scope.userName,
    }
    chatServer.send(JSON.stringify(chatObj));
    $scope.chatInput = '';
  }
}

App.controller('ChatController', ['$scope', fn]);