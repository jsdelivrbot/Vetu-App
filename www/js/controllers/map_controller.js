angular.module('starter.controllers')
.controller('MapCtrl', function($scope, $state, $http, $location, NgMap, ServicesFactory, API_HOST) {
    $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyAeuLrVU9uttWHM7OBAOjmXUiyXwXsYivU";
    $scope.travelMode='DRIVING';
    $scope.logLatLng = function(e) {
        console.log('loc', e.latLng);
      }
      $scope.service = ServicesFactory.get({ id: 1 });
      console.log($scope.service);
      $scope.service.$promise.then(function (result) {
        $scope.latitude = result.service_latitude;
        $scope.longitude = result.service_longitude;
        var latitude = parseFloat($scope.latitude);
        var longitude = parseFloat($scope.longitude);

        $scope.wayPoints = [
          {location: {lat:latitude, lng:longitude}, stopover: true},
        ];
        $scope.product = result.products[0];

        getKilometros = function(lat1,lon1,lat2,lon2) {
          rad = function(x) {return x*Math.PI/180;}
          var R = 6378.137; //Radio de la tierra en km
          var dLat = rad( lat2 - lat1 );
          var dLong = rad( lon2 - lon1 );
          var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2);
          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
          var d = R * c;
          return d.toFixed(3); //Retorna tres decimales
        }

        navigator.geolocation.getCurrentPosition(function(pos) {
          window.localStorage.setItem("actual_lat", pos.coords.latitude);
          window.localStorage.setItem("actual_lon", pos.coords.longitude);
        });
        $scope.actual_lat = window.localStorage.getItem("actual_lat");
        $scope.actual_lng = window.localStorage.getItem("actual_lon");
        let firstDistance = parseFloat(getKilometros(latitude, longitude, 31.867140, -116.624717));
        let secondDistance = parseFloat(getKilometros(latitude, longitude, $scope.actual_lat, $scope.actual_lng));
        let finalDistance = firstDistance + secondDistance;
        $scope.precio = (finalDistance * 0.75) + $scope.product.product_price + ($scope.product.product_price*0.20);
    });

    NgMap.getMap().then(function(map) {
        console.log(map.getCenter());
        console.log('markers', map.markers);
        console.log('shapes', map.shapes);
      });

      $scope.updateUser = function (user) {
        $scope.user.usertype = "premium";
        // user.$update();
        console.log("Hola perru");
      };

      // Espera los resultados del checkout
      var success = function (payment) {
        if (payment != null) {
          // Listo! El pago ya fue procesado por MP.

          console.log(JSON.parse(payment).id);
            // console.log($scope.userp.usertype);
            // $scope.userp.usertype = "premium";
            // user.$update();
            window.location.href = '#/compra';
            console.log("Se hizo el pago");

        } else {
          alert("El usuario no concretó el pago.");
        }
      };
      var failure = function (error) {
        // Error llamando a MercadoPago Plugin
        console.log("Error MercadoPagoPlugin : " + error);
      };

      var publicKey = "TEST-ad365c37-8012-4014-84f5-6c895b3f8e0a";
      var prefId = "176234066-fc6d5d5e-2671-4073-ab49-362a98b720b5";

      $scope.createPayment = function(){
        MercadoPago.createPayment(publicKey, $scope.product.product_id, $scope.product.product_no, $scope.product.product_price, 111111, "access_token", "url.com", "createPayment", "visa", 12, 3, 123456678);
       }

      // Método ejecutado al hacer clic en el botón
      // $scope.startCheckout = function () {
      //   // Iniciar el checkout de MercadoPago
      //   MercadoPago.startCheckout(publicKey, prefId, null, false, success, failure);
      // }
       $scope.user_uri = API_HOST + "/users/" + localStorage.getItem("user_id");

      $scope.receipt = {
        service: "Carls Jr.",
        total: $scope.precio,
        user_id: $scope.user_uri,
      };
      // $scope.receipt = {
      //   receipt_service: "",
      //   receipt_total: "",
      //   user: "",
      // };
      $scope.generateReceipt = function () {
        var req = {
            method: 'POST',
            url: API_HOST + "/receipts",
            data: JSON.stringify($scope.receipt),
            dataType: "json",
        }
        $http(req)
            .then(function (receipt) {
                console.log(receipt);
                // $scope.receipt = {
                //   receipt_service: "Carls Jr.",
                //   receipt_total: $scope.precio,
                //   user: localStorage.getItem("user_id"),
                // };
                $location.path('/compra');
            })
            .catch(function (error) {
                console.log(error);
            });
    }
});
