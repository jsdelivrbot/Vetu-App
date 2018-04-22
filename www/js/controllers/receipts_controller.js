angular.module('starter.controllers')
.controller('ReceiptsCtrl', function($scope) {
    $scope.recipes = [
      { title: 'Recibo 1', id: 1 },
      { title: 'Recibo 2', id: 2 },
      { title: 'Recibo 3', id: 3 },
      { title: 'Recibo 4', id: 4 },
      { title: 'Recibo 5', id: 5 },
      { title: 'Recibo 6', id: 6 }
    ];
  });