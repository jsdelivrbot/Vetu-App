angular.module('starter.services', [])

.factory('ItemFactory', function($resource, API_HOST)
{
    return $resource(API_HOST + '/items/:id', {id: "@id"}, 
        {update:{method: "PUT"} });
});