'use strict';

define([
    'app',
    'Initiateevents',
], function(app, Initiateevents) {
    app.controller('ReceiveView', [
        '$scope',
        '$location', 
        '$stateParams',
        'InitiateEventFactory',
        function(
            $scope,
            $location, $stateParams,
            InitiateEventFactory
        ) {
            $scope.findOne = function() {
                InitiateEventFactory.get({
                    initiateEventId: $stateParams.initiateEventId      
                               
                }, function(initiateevent) {
                    $scope.initiateevent = initiateevent;              
                });
            };
           

          
        }
    ]);

});
