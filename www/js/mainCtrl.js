angular.module("starter")

  .controller("messageCtrl", ['$scope', function($scope) {

    $scope.display = 0;
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

    $scope.sqrt = function(){
      $scope.display = Math.sqrt($scope.display);
    };

    $scope.inverseCos = function(){
      $scope.display = Math.acos($scope.display*(Math.PI / 180));
    };

    $scope.inverseSin = function(){
      $scope.display = Math.asin($scope.display*(Math.PI / 180));
    };

    $scope.inverseTan = function(){
      $scope.display = Math.atan($scope.display);
    };


    // clears display
    $scope.clear = function(clear) {
        $scope.display = 0;
      };


  }]);



// CODE ACADEMY

$(document).ready(function(){
  var testNumLength = function(number) {
        if (number.length > 9) {
            totaldiv.text(number.substr(number.length-9,9));
            if (number.length > 15) {
                number = "";
                totaldiv.text("Err");
            }
        }
    };
  var number = "";
  var newnumber = "";
  var operator = "";
  var totaldiv = $("#total");
  totaldiv.text("0");

    //Add your .click() here!

});
