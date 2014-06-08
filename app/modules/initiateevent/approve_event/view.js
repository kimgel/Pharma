'use strict';

define(['app', 'Eventmains'], function(app, Eventmains) {
    app.controller('EventMainViewCtrl', [
        '$scope',
        '$location', 
        '$stateParams',
        'EventMainFactory',
        function($scope, $location, $stateParams, EventMainFactory) {
            $scope.findOne = function() {
                EventMainFactory.get({
                    eventMainId: $stateParams.eventMainId      
                               
                }, function(eventmain) {
                    $scope.eventmain = eventmain;              
                });
            };
        }
    ]);
});
