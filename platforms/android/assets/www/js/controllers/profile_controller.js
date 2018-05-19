angular.module('starter.controllers')
.controller('ProfileCtrl', function($scope, $rootScope) {

  $scope.image = "data:image/jpg;base64,"+ $scope.user.userimage;
  // $scope.number_receipts = Object.keys($scope.user.receipts).length;
  // $scope.image = $rootScope.image;
  // console.log($scope.image);

});
