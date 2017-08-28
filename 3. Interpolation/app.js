( function (){
    "use strict";

    angular.module('MyModule',[])
    .controller('MyController',MyControllerMethod);

    function MyControllerMethod($scope){
      $scope.msg = "Hello";
      $scope.name = "John";
      $scope.amount = "123.7856";
    }

  }
)();
