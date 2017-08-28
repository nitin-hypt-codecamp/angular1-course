( function (){
    "use strict";

    angular.module('MyDependencyModule',[])
    .controller('DIController',DIControllerMethod);

    DIControllerMethod.$inject= ['$scope','$filter','$injector'];

    function DIControllerMethod($scope, $filter,$injector){
      $scope.name="John";
      $scope.amount = "2334.6785";
      
      $scope.upper = function(){
        // var upCase = $filter('uppercase');
        $scope.name = $filter('uppercase')($scope.name);
      }

      console.log($injector.annotate(DIControllerMethod));

    }

    console.log(DIControllerMethod.toString());

  }
)();
