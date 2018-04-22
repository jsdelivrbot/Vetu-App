angular.module('starter.services', [])

.factory('ItemFactory', function($resource, API_HOST)
{
    return $resource(API_HOST + '/items/:id', {id: "@id"},
        {update:{method: "PUT"} });
})

.factory('ReceiptsFactory', function ($resource, API_HOST) {
  return $resource(API_HOST + '/receipts/:id', { id: "@id" },
    { update: { method: "PUT" } });
})

.factory('ServicesFactory', function ($resource, API_HOST) {
    return $resource(API_HOST + '/services/:id', { id: "@id" },
      { update: { method: "PUT" } });
  });
;
