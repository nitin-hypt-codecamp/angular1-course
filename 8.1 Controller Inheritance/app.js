(
  function (){
    "use strict";

      angular.module('MyApp',[])
      .controller('ParentController1',['$scope',ParentController1])
      .controller('ChildController1',['$scope',ChildController1])
      .controller('ParentController2',['$scope',ParentController2])
      .controller('ChildController2',['$scope',ChildController2]);

      function ParentController1($scope)
      {
        $scope.parentValue = 1;
        $scope.pc = this;
        $scope.pc.parentValue = 1;
      }

      function ChildController1($scope)
      {
        // console.log("$scope.parentValue: ", $scope.parentValue);
        // console.log("Child $scope ", $scope);

        // $scope.parentValue = 5;
        // console.log("*** Changed: $scope.parentValue to 5 ***");
        // console.log("child $scope.parentValue: ", $scope.parentValue);
        // console.log($scope);

        // console.log("$scope.pc.parentValue: ", $scope.pc.parentValue);
        // $scope.pc.parentValue = 5;
        // console.log("*** Changed: $scope.pc.parentValue to 5 ***");
        // console.log("child $scope.pc.parentValue: ", $scope.pc.parentValue);
        // console.log("child $scope", $scope);

      }

      function ParentController2($scope)
      {
        var parent = this;
        parent.value = 1;
      }

      function ChildController2($scope)
      {
        var child = this;
        child.value = 5;
        //console.log("ChildController2 $scope: ", $scope);
      }


  }

)();
