angular.module("starter")

  .controller("messageCtrl", ['$scope', function($scope) {

    $scope.display = "";
    $scope.current = true;
    $scope.previous = null;
    $scope.runningTotal = null;
    $scope.pendingValue = null;
    $scope.lastOperation = null;

    var ADD = "adding";
    var SUBTRACT = "subtracting";
    var ADD_TOKEN = "+";
    var SUBTRACT_TOKEN = "-";

    // Runs every time a number button is clicked.
    // Updates display and sets newNumber
    $scope.button = function(btn){
      if ($scope.display == "0" || $scope.current) {
          $scope.display = btn;
          $scope.current = false;
      } else {
        $scope.display += String(btn);
      }
      $scope.pendingValue = toNumber($scope.display);

    };


    $scope.sin = function(){
      $scope.display = Math.sin($scope.display*(Math.PI / 180));
    };

    $scope.cos = function(){
      $scope.display = Math.cos($scope.display);
    };

    $scope.tan = function(){
      $scope.display = Math.tan($scope.display*(Math.PI / 180));
    };

    $scope.inverseCos = function(){
      $scope.display = Math.acos($scope.display*(Math.PI / 180));
    };

    $scope.sqrt = function(){
      $scope.display = Math.sqrt($scope.display);
    };



    // clears display
    $scope.clear = function(clear) {
        $scope.display = "";
      };

  }]);
