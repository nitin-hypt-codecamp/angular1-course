
(

  function (){
    "use strict";

      angular.module('MyFirstApp',[])
      .controller('FirstController',['$scope',FirstControllerFunction]);

      function FirstControllerFunction($scope)
      {
        $scope.name = "John Doe";
        $scope.email = "john.doe@gmail.com";
      }
  }

)();
