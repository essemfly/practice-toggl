/**
 * Created by Seokmin on 12/19/14.
 */

(function () {
  'use strict';

  angular
    .module('toggl')
    .controller('TimerCtrl', TimerCtrl);

  TimerCtrl.$inject = ['$scope', '$timeout', 'localStorageService'];

  function TimerCtrl($scope, $timeout, localStorageService) {
    // Initialize variables
    var tmPromise;
    $scope.elapsedTime = 0;
    $scope.buttonStyle = 'btn-success';
    $scope.buttonText = 'Start';
    $scope.block = false;
    $scope.tasks = [];


    // Local Storage tasks Load & Reset fn
    var fillInTasks = function fillInTasks() {
      var lsLength = localStorageService.length();
      for (var j = 0; j < lsLength; j++) {
        $scope.tasks.push(localStorageService.get(j));
      }
    };
    var cleanTasks = function cleanTasks() {
      return localStorageService.clearAll();
    };

    // load tasks
    fillInTasks();

    // Use when reset localstorage
    // cleanTasks();


    /**
     * Toggl Timer Button:
     * Start and Stop the toggl timer
     */
    $scope.togglTimer = function togglTimer() {
      if ($scope.buttonText === 'Start') {
        var today = new Date();
        $scope.timeStart = today.getTime();
        runClock();
      } else {
        stopClock();
        localStorageService.set(localStorageService.length(), $scope.tasks[localStorageService.length()]);
      }
    };

    /**
     *  runClock: Check time between timer started and finished.
     *  Block the contents not to be modified and change the button text & color.
     */
    var runClock = function runClock() {
      var today = new Date();
      $scope.buttonStyle = 'btn-danger';
      $scope.block = true;
      $scope.buttonText = 'ING';
      $scope.timeEnd = today.getTime();
      $scope.elapsedTime = Math.floor(($scope.timeEnd - $scope.timeStart) / 1000);

      tmPromise = $timeout(function () {
        runClock();
      }, 500);
    };

    /**
     *  stopClock: Stop the timer.
     *  Unblock the contents and change the button text & color.
     *  add item in tasks list
     */
    var stopClock = function stopClock() {
      var imageload;
      $scope.buttonText = 'Start';
      $scope.buttonStyle = 'btn-success ';
      $timeout.cancel(tmPromise);
      $scope.block = false;

      if ($scope.elapsedTime > 10) {
        imageload = 'tree.jpeg';
      }
      else {
        imageload = 'small_tree.jpeg';
      }

      var addItem = function addItem() {
        $scope.tasks.push(
          {
            title: $scope.itemtitle,
            description: $scope.itemcontent,
            starttime: $scope.timeStart,
            finishtime: $scope.timeEnd,
            timespend: $scope.elapsedTime,
            logo: imageload
          });
      };

      addItem();
    };


  }

})();
