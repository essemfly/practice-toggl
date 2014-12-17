'use strict';

angular.module('toggl')
  .controller('MainCtrl', ['$scope','$timeout', 'localStorageService', function ($scope, $timeout, localStorageService) {
    // Local Storage tasks Load
    $scope.tasks = [];
    $scope.block = false;
    var fillInTasks = function(){
      var lsLength = localStorageService.length();
      for (var j=0;j<lsLength;j++){
        $scope.tasks.push(localStorageService.get(j));
      }
    };
    var cleanTasks = function(){
      return localStorageService.clearAll();
    };

    fillInTasks();
    //cleanTasks();

    // Initialize things;
    var tmPromise;
    $scope.elapsedTime = 0;
    $scope.buttonStyle = 'btn-success';
    $scope.buttonText = 'Start';

    // Toggl Button
    $scope.toggleTimer = function () {
      if($scope.buttonText ==='Start'){
        var today= new Date();
        $scope.timeStart = today.getTime();
        runClock();
      } else {
        stopClock();
        localStorageService.set(localStorageService.length(),$scope.tasks[localStorageService.length()]);
      }
    };

    // insert 0

    var addItem = function(){
      $scope.tasks.push(
        {
        title: $scope.itemtitle,
        description: $scope.itemcontent,
        starttime: $scope.timeStart,
        finishtime: $scope.timeEnd,
        timespend: $scope.elapsedTime,
        logo: 'logo'
      });
    };

    var runClock = function (){
      var today = new Date();
      $scope.buttonStyle = 'btn-danger';
      $scope.block = true;
      $scope.buttonText = 'ING';
      $scope.timeEnd = today.getTime();
      $scope.elapsedTime =  Math.floor(($scope.timeEnd - $scope.timeStart) / 1000);

      tmPromise = $timeout(function () {
        runClock();
      }, 500);
    };

    var stopClock = function(){
      $scope.buttonText = 'Start';
      $scope.buttonStyle = 'btn-success ';
      $timeout.cancel(tmPromise);
      $scope.block = false;
      addItem();

    };

  }])

.filter('displayTime',function() {
  return function(input){
    function checkTime(i) {
      i = (i < 1) ? 0 : i;
      if (i < 10) { i = '0' + i; }  // add zero in front of numbers < 10
      return i;
    }
    var ms = input;
    var h, m, s = new Date();
    h =  checkTime(Math.floor(ms / 3600));
    ms = Math.floor(ms % 3600);
    m = checkTime(Math.floor(ms / 60));
    ms = Math.floor(ms % 60);
    s = checkTime(Math.floor(ms));

    return h + ':' + m + ':' + s;

  };
})

.directive('inputList', function(){
  return {
    restrict: 'E',
    templateUrl: 'app/main/tasklist.html'
  };
});
