(function () {

angular.module('lunchCheck', [])

.controller('lunchCheckController', myLunch);

myLunch.$inject = ['$scope', '$filter'];

function myLunch($scope, $filter) {

$scope.lunchDishes = '';

var msg = '';

$scope.lunchOrderChk = function () {

  if ($scope.lunchDishes == '') {
    msg = 'Please enter dishes first!';
    return ;
  }

  var dishesPlaced = $scope.lunchDishes.split(",");
  var numOfDishesPlaced = dishesPlaced.length;

  // msg = $scope.lunchDishes;

  console.log(dishesPlaced, numOfDishesPlaced);

  for (var i in dishesPlaced) {

    if (dishesPlaced[i].trim() == '') {
      numOfDishesPlaced = numOfDishesPlaced - 1;
    }
    console.log(i, dishesPlaced[i], numOfDishesPlaced);
  };

if (numOfDishesPlaced > 4) {
    msg = 'Too much, order placed canNOT be more than 4 dishes!';
  } else {
    msg = 'Enjoy!';
  }

};

$scope.orderMsg = function () {
  return msg;
}

};

})();
