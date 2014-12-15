'use strict';

var toggl = angular.module('toggl', ['ngRoute','LocalStorageModule','ui.router']);


toggl.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


toggl.config(function(localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('toggl')
    .setStorageType('sessionStorage')
    .setNotify(true,true);
});
