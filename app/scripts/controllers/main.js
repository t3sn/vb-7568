'use strict';

/**
 * @ngdoc function
 * @name gurucoolApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gurucoolApp
 */
angular.module('gurucoolApp')
  .controller('MainCtrl', function () {
    this.schoolData = getSchoolData();
//	console.log(getSchoolData()[0]);
  });
