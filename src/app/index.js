'use strict';

var toggl = angular.module('toggl', ['LocalStorageModule','ui.router']);


toggl.config(function(localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('toggl')
    .setStorageType('sessionStorage')
    .setNotify(true,true);
});

toggl.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('state1', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainCtrl'
    })
    .state('state2', {
      url: '/state2',
      templateUrl: 'app/main/b.html',
      controller: 'bCtrl'
    });
});
