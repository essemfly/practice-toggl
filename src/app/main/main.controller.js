'use strict';

angular.module('toggl')
  .controller('MainCtrl', function ($scope) {
    $scope.date =   {
      Dt: Date.now()
    };
    $scope.date = $filter('date')($scope.date, "dd/MM/yyyy");


    $scope.buttonstate = 0;
    $scope.buttonText = "Start"

    $scope.buttonChange = function(buttonstate){
      if ($scope.buttonstate === 0) {
        $scope.buttonText = "ING";
        $scope.buttonstate += 1;
      } else {
        $scope.buttonText = "Start";
        $scope.buttonstate = 0;
        $scope.addItem();
      }
    }


    $scope.addItem = function (buttonText, buttonstate){

        $scope.awesomeThings.push({
          'title': $scope.itemtitle,
          'description': $scope.itemcontent,
          'datesubmit': '',
          'logo': 'logo',
          'timespend':'timespend'
        });
    };



    $scope.awesomeThings = [
      {
        'datesubmit': '2014-12-14',
        'title': 'Angular UI Bootstrap',
        'description': 'Bootstrap components written in pure AngularJS by the AngularUI Team.',
        'logo': 'ui-bootstrap.png',
        'timespend': ''
      },
      {
        'datesubmit': '2014-12-14',
        'title': 'Sass (Node)',
        'description': 'Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.',
        'logo': 'node-sass.png',
        'timespend': ''
      }
    ];



    angular.forEach($scope.awesomeThings, function(awesomeThing) {
      awesomeThing.rank = Math.random();
    });
  });
