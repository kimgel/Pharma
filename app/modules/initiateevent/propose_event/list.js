'use strict'; 

define(['app', 'Eventts'], function(app, Eventts) {
    app.controller('EventtList', [
        '$scope',
        '$location',
        'EventtFactory', 
        function($scope, $location, EventtFactory) {
            $scope.all = function() {
                EventtFactory.query(function(eventts) {
                    $scope.eventts = eventts;
                });
            };
        }
    ]);
});
