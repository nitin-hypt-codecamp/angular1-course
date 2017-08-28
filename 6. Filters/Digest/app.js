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
          setTimeout(function(){
            $scope.counter++;
            $scope.$digest();
            console.log('counter: ',$scope.counter);
          },2000);
        }

        // Test for checking the execution of digect cycle
        $scope.$watch(function(){
          console.log("Digest Cycle Executed");
        });
    }

})();
