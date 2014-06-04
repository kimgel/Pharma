'use strict'; 

define(['app', 'Eventmains'], function(app, Eventmains) {
    app.controller('EventMainList', [
        '$scope',
        '$location',
        'EventMainFactory', 
        function($scope, $location, EventMainFactory) {
            $scope.all = function() {
                EventMainFactory.query(function(eventmains) {
                    $scope.eventmains = eventmains;
                });
            };
        }
    ]);
});
