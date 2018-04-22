angular.module('starter.controllers')
.controller('LoginCtrl', function ($scope, $httpParamSerializer, $http, $location, $state, API_HOST) {
    var HTTP_STATUS = {
        Badrequest: 400,
        Unauthorized: 401,
        Forbidden: 403,
        Notfound: 404,
        Badgateway: 502
    }
  
    $scope.log = false;
    $scope.error_login = false;
    $scope.data = {
        grant_type: "password",
        username: "",
        password: "",
        client_id: "my-trusted-client"
    };
  
    $scope.encoded = btoa("my-trusted-client:secret");
  
    // if (window.localStorage.getItem("access_token")) {
    //     $location.path('/list');
    // }
  
    $scope.login = function () {
  
        var req = {
            method: 'POST',
            url: API_HOST + "/oauth/token",
            headers: {
                "Authorization": "Basic " + $scope.encoded,
                "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            data: $httpParamSerializer($scope.data)
        }
        $http(req)
            .then(function (data) {
                $http.defaults.headers.common.Authorization = 'Bearer ' + data.data.access_token;
                window.localStorage.setItem("access_token", data.data.access_token);
                $scope.token = window.localStorage.getItem("access_token");
  
            })
            .catch(function (error) {
                if (error.status == HTTP_STATUS.Badrequest || HTTP_STATUS.Unauthorized) {
                    $scope.error_login = true;
                }
            });
    }
  });