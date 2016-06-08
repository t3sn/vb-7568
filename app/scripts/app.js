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
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      }).when('/faculties', {
        templateUrl: 'views/faculty-listing.html'//,
        //controller: 'FacultyCtrl',
        //controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
