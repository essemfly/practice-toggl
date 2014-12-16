'use strict';


angular.module('toggl')
  .controller('statCtrl', ['$scope','$timeout', function ($scope) {
    $scope.model ={
      message: 'This is my app'
    };
  }]);
