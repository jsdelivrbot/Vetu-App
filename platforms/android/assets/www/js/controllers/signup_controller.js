angular.module('starter.controllers')
.controller('SignupCtrl', function($scope, API_HOST, $httpParamSerializer, $http, $location, $state) {

    $scope.sign = {
        user_id: "",
        username: "",
        userpassword: "",
        useremail: "",
        userphone: "",
        usertype: "normal"
    };

    $scope.signup = function () {
        var req = {
            method: 'POST',
            url: API_HOST + "/users",
            data: JSON.stringify($scope.sign),
            dataType: "json",
        }
        $http(req)
            .then(function (sign) {
                console.log(sign);
                $scope.sign = {
                    user_id: "",
                    username: "",
                    userpassword: "",
                    useremail: "",
                    userphone: "",
                    usertype: "normal"
                 };
                $location.path('/success');
            })
            .catch(function (error) {
                console.log(error);
            });
    }
});
