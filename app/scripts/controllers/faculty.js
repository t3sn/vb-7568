'use strict';

/**
 * @ngdoc function
 * @name gurucoolApp.controller:FacultyCtrl
 * @description
 * # FacultyCtrl
 * Controller of the gurucoolApp
 */
angular.module('gurucoolApp')
  .controller('FacultyCtrl', function ($location) {
    if ( $location.search().hasOwnProperty( 'name' ) ) {
       this.name = $location.search()['name'];
    }
  });
