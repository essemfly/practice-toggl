/**
 * Created by Seokmin on 12/19/14.
 */


// controller As 추가되야 함.

(function () {
  'use strict';

  angular
    .module('toggl')
    .config(config);

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'TimerCtrl'
      })
      .state('stat', {
        url: '/stat',
        templateUrl: 'app/main/stat.html',
        controller: 'StatCtrl'
      });
  }

})();
