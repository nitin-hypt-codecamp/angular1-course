(function(){
    'use strict';

    angular.module('CounterApp',[])
    .controller('CounterController',CounterControllerFunction);

    CounterControllerFunction.$inject = ['$scope'];

    function CounterControllerFunction($scope) {
        $scope.counter = 0;

        $scope.runningCounter = function(){
          setTimeout(function(){
            $scope.$apply(function(){              
              $scope.counter++;
              console.log("Counter: ", $scope.counter);
            })
          },2000)
        }

    }

})();
