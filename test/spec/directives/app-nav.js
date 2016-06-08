'use strict';

describe('Directive: appNav', function () {

  // load the directive's module
  beforeEach(module('gurucoolApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<app-nav></app-nav>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the appNav directive');
  }));
});
