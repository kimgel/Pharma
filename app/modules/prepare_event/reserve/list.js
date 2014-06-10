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

           // $scope.view = false;
            
            $scope.all = function() {
                
                InitiateEventFactory.query(function(initiateevents) {
                    $scope.initiateevents = initiateevents;
                   // $scope.initiateevent.eventtypes = $scope.eventtypes[0]._id;
                   // console.log($scope.initiateevents);
                });
            };

          
        }
    ]);

});
