'use strict';

/**
 * @ngdoc overview
 * @name gurucoolApp
 * @description
 * # gurucoolApp
 *
 * Main module of the application.
 */
var gurucoolApp = angular
  .module('gurucoolApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'puigcerber.capitalize'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      }).when('/schools', {
        templateUrl: 'views/school-info.html',
        controller: 'SchoolCtrl',
        controllerAs: 'school'
      }).when('/absentism', {
        templateUrl: 'views/absentism-report.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(['$locationProvider', function($locationProvider) {
    // In order to get the query string from the
    // $location object, it must be in HTML5 mode.
    // $locationProvider.html5Mode(true);
  }]);
