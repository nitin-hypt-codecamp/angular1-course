(
  function()
  {
    'use script';

    angular.module('BindingApp',[])
    .controller('BindingController',BindingControllerFunction);

    BindingControllerFunction.$inject = ['$scope']
    function  BindingControllerFunction($scope)
    {
      $scope.name = 'John Doe';
      // $scope.nameWithSalutation = '';

      // function to show the number of watchers which is bound to a button
      $scope.showWatcherCount = function()
      {
          // console.log($scope);
          // console.log("#No. of Listeners", $scope.$$listenerCount);
          console.log("#No. of watchers", $scope.$$watchersCount);
      }

      $scope.setNameWithSal = function()
      {
        $scope.nameWithSalutation =  "Mr. " + $scope.name;
      }

      $scope.logNames = function(){
        console.log("Name is: ", $scope.name);
        console.log("Name with salutation is: ", $scope.nameWithSalutation);
      }

      $scope.logNameWithSal = function(){
        console.log("Name with salutation is: ", $scope.nameWithSalutation);
      }

    }
  }
)()
