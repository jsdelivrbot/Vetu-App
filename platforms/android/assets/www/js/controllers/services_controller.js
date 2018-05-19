angular.module('starter.controllers')
.controller('ServicesCtrl', function($scope, $rootScope, $location, $http, ServicesFactory) {

    var HTTP_STATUS = {
        Badrequest: 400,
        Unauthorized: 401,
        Forbidden: 403,
        Notfound: 404,
        Badgateway: 502
    }

    if ($rootScope.token) {
        $http.defaults.headers.common.Authorization = 'Bearer ' + $rootScope.token;
    }
    
    $scope.services = ServicesFactory.query(function (data) {
      
    }, function (error) {
      if(error.status == HTTP_STATUS.Unauthorized || error.status == HTTP_STATUS.Forbidden){
            localStorage.removeItem("access_token");
            $location.path('/login');
      }
      else{
           $location.path('/error');
           
      }

     });
})