'use strict'; 

define(['app', 'Eventmains'], function(app, Eventmains) {
    app.controller('ApproveList', [
        '$scope',
        '$location',
        'EventMainFactory', 
        function($scope, $location, EventMainFactory) {
            $scope.all = function() {
                EventMainFactory.query({
                    kim: 'name'
                },function(eventmains) {
                    $scope.eventmains = eventmains;
                });
            };
        }
    ]);
});
