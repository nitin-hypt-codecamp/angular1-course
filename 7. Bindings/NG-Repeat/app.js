(
  function()
  {
    'use strict';

    angular.module('NgRepeatApp',[])
    .controller('RepeatController',RepeatController);

    RepeatController.$inject = ['$scope']
    function  RepeatController($scope)
    {
      $scope.countries = ['Argentina','Britain','Canada','Denmark','India','USA'];

    }
  }
)();
