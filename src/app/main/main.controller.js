'use strict';


angular.module('toggl')
  .controller('MainCtrl', ['$scope','$timeout', 'localStorageService', function ($scope, $timeout, localStorageService) {


    $scope.$watch('localStorageDemo', function(value){
      localStorageService.add('localStorageDemo',value);
      $scope.localStorageDemoValue = localStorageService.get('localStorageDemo');
    });

    $scope.storageType = 'Local storage';

    if (localStorageService.getStorageType().indexOf('session') >=0) {
      $scope.storageType = 'Session storage';
    }
    if (!localStorageService.isSupported){
      $scope.storageType = 'Cookie';
    }

    var tmPromise;
    $scope.timer = '00:00:00';
    $scope.buttonStyle = 'btn-success';
    $scope.buttonText = 'Start';

    $scope.toggleTimer = function () {
      if($scope.buttonText ==='Start'){
        var today= new Date();
        $scope.timeStart = today.getTime();
        $scope.runClock();
        $scope.buttonStyle = 'btn-danger';
      } else {
        $scope.stopClock();
        $scope.buttonStyle = 'btn-success ';
      }
    };

    function checkTime(i) {
      i = (i < 1) ? 0 : i;
      if (i < 10) { i = '0' + i; }  // add zero in front of numbers < 10
      return i;
    }

    $scope.runClock = function (){
      $scope.buttonText = 'ING';
      var h, m, s, ms, today = new Date();
      $scope.timeEnd = today.getTime();
      ms = Math.floor(($scope.timeEnd - $scope.timeStart) / 1000);
      h =  checkTime(Math.floor(ms / 3600));
      ms = Math.floor(ms % 3600);
      m = checkTime(Math.floor(ms / 60));
      ms = Math.floor(ms % 60);
      s = checkTime(Math.floor(ms));
      // normalize time string
      $scope.timer = h + ':' + m + ':' + s;

      tmPromise = $timeout(function () {
        $scope.runClock();
      }, 500);
    };

    $scope.stopClock = function(){
      $scope.buttonText = 'Start';
      $timeout.cancel(tmPromise);
      $scope.addItem();
    };


    $scope.addItem = function(){
        $scope.tasks.push({
          'title': $scope.itemtitle,
          'description': $scope.itemcontent,
          'starttime': $scope.timeStart,
          'finishtime': $scope.timeEnd,
          'timespend': $scope.timer,
          'logo': 'logo'
        });
    };

    $scope.tasks = [
      {
        'title': 'Angular UI Bootstrap',
        'description': 'Bootstrap components written in pure AngularJS by the AngularUI Team.',
        'starttime': '2014-12-14',
        'finishtime': '2014-12-14',
        'logo': 'ui-bootstrap.png',
        'timespend': ''
      }
    ];
  }]);
