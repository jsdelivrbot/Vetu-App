angular.module('starter.controllers')
.controller('MapCtrl', function($scope, $state,  NgMap, ServicesFactory) {
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
});
