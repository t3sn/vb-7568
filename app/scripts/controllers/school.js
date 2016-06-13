'use strict';

/**
 * @ngdoc function
 * @name gurucoolApp.controller:SchoolCtrl
 * @description
 * # SchoolCtrl
 * Controller of the gurucoolApp
 */
angular.module('gurucoolApp')
  .controller('SchoolCtrl', function ($location) {
    if ( $location.search().hasOwnProperty( 'name' ) ) {
       this.name = $location.search()['name'];
    }
  });
