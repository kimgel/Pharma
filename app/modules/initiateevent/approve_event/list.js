'use strict'; 
/*
define(['app', 'Initiateevents'], function(app, Initiateevents) {
    app.controller('ApproveList', [
        '$scope',
        '$location',
        'InitiateEventFactory', 
        function($scope, $location, InitiateEventFactory) {
            $scope.all = function() {
                InitiateEventFactory.query({
                    kim: 'name'
                },function(initiateevents) {
                    $scope.initiateevents = initiateevents;
                });
            };
        }
    ]);
});
*/

define(['app', 'Initiateevents'], function(app, Initiateevents) {
    app.controller('ApproveList', [
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

