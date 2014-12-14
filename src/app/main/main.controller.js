'use strict';
var tmPromise;

angular.module('toggl')
  .controller('MainCtrl', ['$scope','$timeout', function ($scope, $timeout) {

    /*
    $scope.Task = function (start, finish, title, description){
      this.start = start;
      this.finish = finish;
      this.title = title;
      this.description = description;
    };
    */

    /*
    var timeStart = 0, timeEnd =0;
    $scope.mode = "Start";
    $scope.timer = "00:00:00";


    function checkTime(i) {
      i = (i < 1) ? 0 : i;
      if (i < 10) { i = "0" + i; }  // add zero in front of numbers < 10
      return i;
    }

    function startTimer() {
      // toggle
      $scope.mode = "Stop";

      var h, m, s, ms, today = new Date();
      // compute for the duration,
      // normalize for the user
      timeEnd = today.getTime();
      ms = Math.floor((timeEnd - timeStart) / 1000);
      h =  checkTime(Math.floor(ms / 3600));
      ms = Math.floor(ms % 3600);
      m = checkTime(Math.floor(ms / 60));
      ms = Math.floor(ms % 60);
      s = checkTime(Math.floor(ms));
      // normalize time string
      $scope.timer = h + ":" + m + ":" + s;

      // timer expired, restart timer
      tmPromise = $timeout(function () {
        startTimer();
      }, 500);
    }

    function stopTimer() {
      // toggle
      $scope.mode = "Start";

      // stop timeout service
      $timeout.cancel(tmPromise);

      // add to history
      $scope.timeSchedule.history.push([timeStart,
        timeEnd,
        (timeEnd - timeStart) / 1000]);
    }
     */
    $scope.toggleTimer = function () {
      if($scope.mode ==='Start'){
        runClock();
      } else {
        stopTimer();
      }
    };


    function checkTime(i) {
      i = (i < 1) ? 0 : i;
      if (i < 10) { i = "0" + i; }  // add zero in front of numbers < 10
      return i;
    }

    $scope.buttonstate = 0;
    $scope.buttonText = "Start";

    $scope.buttonChange = function(buttonstate){
      if ($scope.buttonstate === 0) {
        $scope.runClock();
        $scope.buttonText = "ING";
        $scope.buttonstate += 1;
      } else {
        $scope.buttonText = "Start";
        $scope.buttonstate = 0;
        $scope.addItem();
      }
    }

    $scope.runClock = function (){
      var h, m, s, ms, today = new Date();
      var timeEnd = today.getTime();
      var timeStart;
      ms = Math.floor((timeEnd - timeStart) / 1000);
      h =  checkTime(Math.floor(ms / 3600));
      ms = Math.floor(ms % 3600);
      m = checkTime(Math.floor(ms / 60));
      ms = Math.floor(ms % 60);
      s = checkTime(Math.floor(ms));
      // normalize time string
      $scope.timer = h + ":" + m + ":" + s;

      $scope.startTime = Date.now();
      $scope.block = Date.now();


    }


    $scope.addItem = function(){
        $scope.tasks.push({
          'title': $scope.itemtitle,
          'description': $scope.itemcontent,
          'starttime': $scope.startTime,
          'datesubmit': Date.now(),
          'timespend': (Date.now()-$scope.startTime)/1000,
          'logo': 'logo'
        });
    };

    $scope.tasks = [
      {
        'title': 'Angular UI Bootstrap',
        'description': 'Bootstrap components written in pure AngularJS by the AngularUI Team.',
        'starttime': '2014-12-14',
        'datesubmit': '2014-12-14',
        'logo': 'ui-bootstrap.png',
        'timespend': ''
      },
      {
        'title': 'Angular UI Bootstrap',
        'description': 'Bootstrap components written in pure AngularJS by the AngularUI Team.',
        'starttime': '2014-12-14',
        'datesubmit': '2014-12-14',
        'logo': 'ui-bootstrap.png',
        'timespend': ''
      }
    ];
  }]);
