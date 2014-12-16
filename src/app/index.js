'use strict';

var toggl = angular.module('toggl', ['LocalStorageModule','ui.router']);


toggl.config(['localStorageServiceProvider', function(localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('togglPrefix')
    //.setStorageCookie()
    .setStorageType('sessionStorage')
    .setNotify(true,true);
}]);

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
