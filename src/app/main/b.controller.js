'use strict';


angular.module('toggl')
  .controller('bCtrl', ['$scope','$timeout', function ($scope) {
    $scope.model ={
      message: 'This is my app'
    };
  }]);
