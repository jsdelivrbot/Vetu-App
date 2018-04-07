angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
})

.controller('RecipesCtrl', function($scope) {
  $scope.recipes = [
    { title: 'Recibo 1', id: 1 },
    { title: 'Recibo 2', id: 2 },
    { title: 'Recibo 3', id: 3 },
    { title: 'Recibo 4', id: 4 },
    { title: 'Recibo 5', id: 5 },
    { title: 'Recibo 6', id: 6 }
  ];
})

.controller('ServicesCtrl', function($scope) {
  $scope.services = [
    { title: 'Steren', id: 1 },
    { title: 'Librería Ramírez', id: 2 },
    { title: 'Titos', id: 3 },
    { title: 'Shirami', id: 4 },
    { title: 'Farmacia similares', id: 5 },
    { title: 'Totas Don Beto', id: 6 }
  ];
})

.controller('ServiceCtrl', function($scope, $stateParams) {
})

.controller('ProfileCtrl', function($scope) {
});