angular.module('starter.controllers')
.controller('ServicesCtrl', function($scope, ServicesFactory) {
  $scope.conexion = false;
  $scope.services = ServicesFactory.query(function (data) {
      $scope.conexion = true;
  }, function (error) {
      $scope.conexion = false;
      console.log("No hay conexión");
  });
})