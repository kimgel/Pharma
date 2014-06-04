'use strict'; 

define(['app', 'Eventtypes'], function(app, Eventtypes) {
    app.controller('EventtypeList', [
        '$scope',
        '$location',
        'EventtypeFactory', 
        function($scope, $location, EventtypeFactory) {
            $scope.all = function() {
                EventtypeFactory.query(function(eventtypes) {
                    $scope.eventtypes = eventtypes;
                });
            };
        }
    ]);
});
