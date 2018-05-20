angular.module('starter.controllers')
.controller('ProfileCtrl', function($scope, $rootScope, UsersFactory) {
  var userid = localStorage.getItem("user_id");
  console.log(userid);
  $scope.userp = UsersFactory.get({ id: userid});
  console.log($scope.userp);

  $scope.image = "data:image/jpg;base64,"+ $scope.user.userimage;
  // $scope.number_receipts = Object.keys($scope.user.receipts).length;
  // $scope.image = $rootScope.image;
  // console.log($scope.image);

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
          window.location.href = '#/premium';
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

    // Método ejecutado al hacer clic en el botón
    $scope.startCheckout = function () {
      // Iniciar el checkout de MercadoPago
      MercadoPago.startCheckout(publicKey, prefId, null, false, success, failure);
    }
});
