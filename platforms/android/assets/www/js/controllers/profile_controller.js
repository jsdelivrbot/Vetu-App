angular.module('starter.controllers')
.controller('ProfileCtrl', function($scope, $rootScope) {

  $scope.user = $rootScope.user;
  $scope.number_receipts = Object.keys($scope.user.receipts).length;
  console.log($scope.user);
  console.log($scope.number_receipts);
});
