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
    { title: 'Steren', id: 1, logo: '../img/services_img/steren_logo.jpg', img: '../img/services_img/steren_largeimage.jpg', description: 'Vendo electronica' },
    { title: 'Librería Ramírez', id: 2, logo: '../img/services_img/ramirez_logo.jpg', img: '../img/services_img/ramirez_largeimage.jpg', description: 'Vendo libros' },
    { title: 'Titos Burger', id: 3, logo: '../img/services_img/titos_logo.jpg', img: '../img/services_img/titos_largeimage.jpg', description: 'Vendo hamburguesas' },
    { title: 'Farmacia similares', id: 4, logo: '../img/services_img/similares_logo.jpg', img: '../img/services_img/similares_largeimage.jpg', description: 'Vendo medicina de dudosa calidad' },
    { title: 'Tortas Don Beto', id: 5, logo: '../img/services_img/beto_logo.jpg', img: '../img/services_img/beto_largeimage.jpg', description: 'Vendo tortas que no hacen que te cagues' }
  ];
})

.controller('ServiceCtrl', function($scope, $stateParams) {
})

.controller('ProfileCtrl', function($scope) {
});