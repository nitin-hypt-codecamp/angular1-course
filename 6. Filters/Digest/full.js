(function(){
    'use strict';

    angular.module('CounterApp',[])
    .controller('CounterController',CounterControllerFunction);

    CounterControllerFunction.$inject = ['$scope'];

    function CounterControllerFunction($scope) {
        $scope.counter = 0;

        $scope.showNumberOfWatchers = function () {
          //console.log($scope);

          console.log("# of watchers: ", $scope.$$watchersCount);

        };

        $scope.runningCounter = function(){
          $scope.counter++;
        }

        // Test for checking the execution of digect cycle
        $scope.$watch(function(){
          console.log("Digest Cycle Executed");
        });
    }

})();
