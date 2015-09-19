angular.module('starter')
.controller('MainCtrl', ['$scope', function($scope){
  $scope.message = 'hello';
  $scope.display = 0;
  var operator = 0;
  var memory = [];
  var operand = 0;

  $scope.numbers = function (x) {
    memory.push(x);
    $scope.display = memory.join('') * 1;
  }
  $scope.operation = function (x) {
    operand = $scope.display;
    memory = [];
    operator = x;
  }

  $scope.clear = function () {
    $scope.display = 0;
    operand = 0;
    memory = [];
  }
  $scope.equals = function () {
    if (operator === 1) {
      $scope.display += operand;
    } else if (operator === 2) {
      $scope.display = operand - $scope.display;
    } else if (operator === 3) {
      $scope.display *= operand;
    } else if (operator === 4) {
      $scope.display = operand / $scope.display;
    }
  }

  $scope.squared = function () {
    $scope.display *= $scope.display;
  }
  $scope.squareRoot = function () {
    $scope.display = Math.sqrt($scope.display);
  }

  $scope.sine = function () {
    $scope.display = Math.sin($scope.display);
  }
  $scope.cosine = function () {
    $scope.display = Math.cos($scope.display);
  }
  $scope.tangent = function () {
    $scope.display = Math.tan($scope.display);
  }
  $scope.arcsine = function () {
    $scope.display = Math.asin($scope.display);
  }
  $scope.arccosine = function () {
    $scope.display = Math.acos($scope.display);
  }
  $scope.arctangent = function () {
    $scope.display = Math.atan($scope.display);
  }

}]);


// angular.module("starter")

//   .controller("MainCtrl", ['$scope', function($scope) {

//     $scope.display = 0;
//     $scope.current = true;
//     $scope.previous = null;
//     $scope.runningTotal = null;
//     $scope.pendingValue = null;
//     $scope.lastOperation = null;


//     // Runs every time a number button is clicked.
//     // Updates display and sets newNumber
//     $scope.button = function(btn){
//       if ($scope.display == "0" || $scope.current) {
//           $scope.display = btn;
//           $scope.current = false;
//       } else {
//         $scope.display += String(btn);
//       }
//       $scope.pendingValue = toNumber($scope.display);

//     };

//     $scope.answer = function(){
//       var x   = $scope.memory * 1,
//           y   = $scope.display * 1,
//           ans = 0;

//       switch($scope.operator){
//         case '+':
//           ans = x + y;
//           break;
//         case '-':
//           ans = x - y;
//           break;
//         case '*':
//           ans = x * y;
//           break;
//         case '/':
//           ans = x / y;
//       }

//       $scope.display = ans;
//       $scope.operator = $scope.memory = '';
//     };

//     $scope.calculate = function(op){
//       $scope.operator = op;
//       $scope.memory = $scope.display;
//       $scope.clearDisplay();
//     };

//     $scope.clearDisplay = function(){
//       $scope.display = '0';
//     };

//     $scope.number = function(num){
//       num = num.toString();
//       if(num === '.' && $scope.display.indexOf('.') > -1){return;}

//       if($scope.display === '0' && num !== '.'){
//         $scope.display = num;
//       }else{
//         $scope.display += num;
//       }
//     };

//     $scope.square = function(){
//       var x   = $scope.display * 1,
//       ans = x*x;
//       $scope.display = ans;
//     };

//     $scope.root = function(){
//       var x   = $scope.display * 1,
//       ans = Math.sqrt(x);
//       $scope.display = ans;
//     };


//     $scope.trig = function(trigType){
//       var x = $scope.display *1;
//       switch(trigType){
//         case 'cos':
//           var ans = Math.cos(x)
//           break;
//         case 'sin':
//           var ans = Math.sin(x);
//           break;
//         case 'tan':
//           var ans = Math.tan(x);
//           break;
//         case 'acos':
//           var ans = Math.acos(x);
//           break;
//         case 'asin':
//           var ans = Math.asin(x);
//           break;
//         case 'atan':
//           var ans = Math.atan(x);
//           break;
//       }
//       $scope.display = ans
//     }
// }]);

//   //   $scope.answer = function(){
//   //     var x   = $scope.memory * 1,
//   //         y   = $scope.display * 1,
//   //         ans = 0;

//   //     switch($scope.operator){
//   //       case '+':
//   //         ans = x + y;
//   //         break;
//   //       case '-':
//   //         ans = x - y;
//   //         break;
//   //       case '*':
//   //         ans = x * y;
//   //         break;
//   //       case '/':
//   //         ans = x / y;
//   //     }

//   //     $scope.display = ans;
//   //     $scope.operator = $scope.memory = '';
//   //   };

//   //   $scope.calculate = function(op){
//   //     $scope.operator = op;
//   //     $scope.memory = $scope.display;
//   //     $scope.clearDisplay();
//   //   };

//   //   $scope.number = function(num){
//   //     num = num.toString();
//   //     if(num === '.' && $scope.display.indexOf('.') > -1){return;}

//   //     if($scope.display === '0' && num !== '.'){
//   //       $scope.display = num;
//   //     }else{
//   //       $scope.display += num;
//   //     }
//   //   };


//   //   $scope.sin = function(){
//   //     $scope.display = Math.sin($scope.display*(Math.PI / 180));
//   //   };

//   //   $scope.cos = function(){
//   //     $scope.display = Math.cos($scope.display);
//   //   };

//   //   $scope.tan = function(){
//   //     $scope.display = Math.tan($scope.display*(Math.PI / 180));
//   //   };

//   //   $scope.sqrt = function(){
//   //     $scope.display = Math.sqrt($scope.display);
//   //   };

//   //   $scope.inverseCos = function(){
//   //     $scope.display = Math.acos($scope.display*(Math.PI / 180));
//   //   };

//   //   $scope.inverseSin = function(){
//   //     $scope.display = Math.asin($scope.display*(Math.PI / 180));
//   //   };

//   //   $scope.inverseTan = function(){
//   //     $scope.display = Math.atan($scope.display);
//   //   };


//   //   // clears display
//   //   $scope.clear = function(clear) {
//   //       $scope.display = 0;
//   //     };


//   // }]);







// // angular.module("starter")

// //     .controller('messageCtrl', ['$scope', function ($scope) {
// //         $scope.display = "";
// //         $scope.current = 0;
// //         $scope.prev = 0;

// //         $scope.evalNumbers = function() {
// //             var total = 0;

// //             if ( $scope.display.contains("+") == true ) {
// //                 var separators = ['\\\+', '-', '×', '÷'];
// //                 var tokens = $scope.display.split(new RegExp(separators.join('|'), 'g')).forEach(function(i) {
// //                     total += parseFloat(i);
// //                 });
// //                 $scope.display = total;
// //             }else if ( $scope.display.contains("÷") == true ) {
// //                 var separators = ['\\\+', '-', '×', '÷'];
// //                 loopFlag = 0;
// //                 var tokens = $scope.display.split(new RegExp(separators.join('|'), 'g')).forEach(function(i) {
// //                     console.log(loopFlag);
// //                     if ( loopFlag == 0 ) {
// //                         total += parseFloat(i);
// //                         loopFlag += 1;
// //                     }else {
// //                         total /= parseFloat(i);
// //                     }
// //                 });
// //                 $scope.display = total;
// //             }else if ( $scope.display.contains("-") == true ) {
// //                 var separators = ['\\\+', '-', '×', '÷'];
// //                 loopFlag = 0;
// //                 var tokens = $scope.display.split(new RegExp(separators.join('|'), 'g')).forEach(function(i) {
// //                     console.log(loopFlag);
// //                     if ( loopFlag == 0 ) {
// //                         total += parseFloat(i);
// //                         loopFlag += 1;
// //                     }else {
// //                         total -= parseFloat(i);
// //                     }
// //                 });
// //                 $scope.display = total;
// //             }else if ( $scope.display.contains("×") == true ) {
// //                 var separators = ['\\\+', '-', '×', '÷'];
// //                 loopFlag = 0;
// //                 var tokens = $scope.display.split(new RegExp(separators.join('|'), 'g')).forEach(function(i) {
// //                     console.log(loopFlag);
// //                     if ( loopFlag == 0 ) {
// //                         total += parseFloat(i);
// //                         loopFlag += 1;
// //                     }else {
// //                         total *= parseFloat(i);
// //                     }
// //                 });
// //                 $scope.display = total;
// //             }
// //         }

// //         $scope.numberBtn = function(number) {
// //             $scope.display = $scope.display + "" + number;
// //             console.log($scope.display);
// //         }

// //         $scope.add = function() {
// //             $scope.evalNumbers();
// //             $scope.display = $scope.display + ' + ';
// //         }

// //         $scope.subtract = function() {
// //             $scope.evalNumbers();
// //             $scope.display = $scope.display + ' - ';
// //         }

// //         $scope.divide = function() {
// //             scope.evalNumbers();
// //             $scope.display = $scope.display + ' ÷ ';
// //         }

// //         $scope.decimal = function() {
// //             $scope.display = $scope.display + '.';
// //         }

// //         $scope.clear = function() {
// //             $scope.display = '';
// //         }

// //         $scope.multiply = function() {
// //             $scope.evalNumbers();
// //             $scope.display = $scope.display + ' × ';
// //         }

// //          $scope.pow = function() {
// //             $scope.display = $scope.display*$scope.display
// //         }

// //          $scope.sin = function() {
// //             $scope.display = Math.sin($scope.display*(Math.PI / 180));
// //         }

// //          $scope.cos = function() {
// //             $scope.display = Math.cos($scope.display*(Math.PI / 180));
// //         }

// //          $scope.tan = function() {
// //             $scope.display = Math.tan($scope.display*(Math.PI / 180));
// //         }

// //          $scope.inverseSin = function() {
// //             $scope.display = Math.asin($scope.display*(Math.PI / 180));
// //         }

// //          $scope.inverseCos = function() {
// //             $scope.display = Math.acos($scope.display*(Math.PI / 180));
// //         }

// //          $scope.inverseTan = function() {
// //             $scope.display = Math.atan($scope.display*(Math.PI / 180));
// //         }

// //          $scope.squareRoot = function() {
// //             $scope.display = Math.sqrt($scope.display);
// //         }

// //         $scope.equal = function() {
// //             $scope.evalNumbers();
// //         }

// //     }]);
