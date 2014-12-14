'use strict';

angular.module('toggl')
  .controller('MainCtrl', function ($scope) {

    $scope.Task = function (start, finish, title, description){
      this.start = start;
      this.finish = finish;
      this.title = title;
      this.description = description;
    }


    $scope.buttonstate = 0;
    $scope.buttonText = "Start"

    $scope.buttonChange = function(buttonstate){
      if ($scope.buttonstate === 0) {
        $scope.startTime = Date.now();
        $scope.buttonText = "ING";
        $scope.buttonstate += 1;
      } else {
        $scope.buttonText = "Start";
        $scope.buttonstate = 0;
        $scope.addItem();
      }
    }

    $scope.addItem = function (){
        $scope.awesomeThings.push({
          'title': $scope.itemtitle,
          'description': $scope.itemcontent,
          'starttime': $scope.startTime,
          'datesubmit': Date.now(),
          'logo': 'logo',
          'timespend':'timespend'
        });
    };

    $scope.awesomeThings = [
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
  });
