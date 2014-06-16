'use strict';

define([
    'app',
    'Initiateevents',
], function(app, Initiateevents) {
    app.controller('PrepareEventList', [
        '$scope',
        '$state',
        'InitiateEventFactory',
        function(
            $scope,
            $state,
            InitiateEventFactory
        ) {

            $scope.all = function() {
                
                InitiateEventFactory.query(function(initiateevents) {
                    $scope.initiateevents = initiateevents;
                });
            };

          
        }
    ]);

});
