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
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainCtrl'
    })
    .state('stat', {
      url: '/stat',
      templateUrl: 'app/main/b.html',
      controller: 'bCtrl'
    });
});
