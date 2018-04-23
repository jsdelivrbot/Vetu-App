
angular.module('starter', ['ionic', "ngRoute", "ngResource","angular-jwt",'starter.controllers', 'starter.services', 'starter.constants'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
  
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })  

  .state('app.cart', {
    url: '/cart',
    views: {
      'menuContent': {
        templateUrl: 'templates/cart.html',
        controller: 'CartCtrl'
      }
    }
  })
  
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    // controller: 'LoginCtrl'
    
  })
   
  .state('app.services', {
    url: '/services',
    views: {
      'menuContent': {
        templateUrl: 'templates/services.html',
        controller: 'ServicesCtrl'
      }
    }
  })

  .state('app.service', {
    url: '/services/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/service.html',
        controller: 'ProductsCtrl'
      }
    }
  })

  .state('app.receipts', {
    url: '/receipts',
    views: {
      'menuContent': {
        templateUrl: 'templates/receipts.html',
        controller: 'ReceiptsCtrl'
      }
    }
  })

  .state('app.profile', {
    url: '/profile',
    views: {
      'menuContent': {
        templateUrl: 'templates/profile.html',
        controller: 'ProfileCtrl'
      }
    }
  });
 
  $urlRouterProvider.otherwise('/app/services');
});
