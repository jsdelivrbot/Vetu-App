angular.module('starter.controllers')

.controller('ProductsCtrl', function($scope, $state, $stateParams, $resource, ServicesFactory) {
     $scope.service = ServicesFactory.get({ id: $state.params.id });

});
