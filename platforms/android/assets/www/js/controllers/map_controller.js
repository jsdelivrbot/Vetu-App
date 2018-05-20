angular.module('starter.controllers')
.controller('MapCtrl', function($scope, NgMap) {
    $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyAeuLrVU9uttWHM7OBAOjmXUiyXwXsYivU";
    $scope.travelMode='DRIVING';
    $scope.logLatLng = function(e) {
        console.log('loc', e.latLng);
      }
      $scope.wayPoints = [
        {location: {lat:31.860621, lng: -116.622112}, stopover: true},
      ];
    NgMap.getMap().then(function(map) {
        console.log(map.getCenter());
        console.log('markers', map.markers);
        console.log('shapes', map.shapes);
      });
});
