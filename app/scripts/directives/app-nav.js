'use strict';

/**
 * @ngdoc directive
 * @name gurucoolApp.directive:appNav
 * @description
 * # appNav
 */
angular.module('gurucoolApp')
  .directive('appNav', function () {
    return {
      templateUrl: 'views/app-nav.html',
      restrict: 'E'//,
//      link: function postLink(scope, element, attrs) {
//        element.text('this is the appNav directive');
//      }
    };
  });
