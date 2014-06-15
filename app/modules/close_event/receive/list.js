'use strict'; 

define(['app', 'Initiateevents'], function(app, Initiateevents) {
    app.controller('EventReceiveList', [
        '$scope',
        '$location',
        'InitiateEventFactory', 
        function($scope, $location, InitiateEventFactory) {
            $scope.all = function() {
                InitiateEventFactory.query(function(initiateevents) {
                    $scope.initiateevents = initiateevents;
                });
            };
        }
    ]);
});
