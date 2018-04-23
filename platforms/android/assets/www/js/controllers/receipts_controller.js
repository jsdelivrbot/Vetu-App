angular.module('starter.controllers')
.controller('ReceiptsCtrl', function($scope, ReceiptsFactory) {
  $scope.conexion = false;
  $scope.receipts = ReceiptsFactory.query(function (data) {
    $scope.conexion = true;
  }, function (error) {
    $scope.conexion = false;
    console.log("No hay conexión");
  });

  $scope.doRefresh = function () {
    var newReceipts = ReceiptFactorys.query(function (data) {
      $scope.receipts = newReceipts;
      $scope.$broadcast('scroll.refreshComplete');
    });
  };
})
