'use strict';

define([
    'app',
    'SuppliesResources',
    'Initiateevents'
], function(app, SuppliesResources) {
    app.controller('ReserveSupplies', [
        '$scope',
        '$state',
        '$stateParams',
        'SuppliesResourceFactory',
        'InitiateEventFactory',
        function(
            $scope,
            $state,
            $stateParams,
            SuppliesResourceFactory, 
            InitiateEventFactory
        ) {
            $scope.initiateevent = {};
            $scope.reserved_supplies = []; //for initiate event reserved supplies array
            $scope.view = false;

            $scope.initiateevent.reserved_supplies = $scope.reserved_supplies;
            /*
            $scope.findOne = function() {
                //getone
                InitiateEventFactory.get({
                    initiateEventId: $stateParams.initiateEventId      
                               
                }, function(initiateevent) {
                    $scope.initiateevent = initiateevent;  
                    console.log(initiateevent);            
                });
                //get supplies
                SuppliesResourceFactory.query(function(suppliesresources) {
                    $scope.suppliesresources = suppliesresources;
                });

            };*/
            $scope.all = function() {
                
                InitiateEventFactory.query(function(initiateevents) {
                    $scope.reservedSupplies = initiateevents[0].reserved_supplies;
                });
                SuppliesResourceFactory.query(function(suppliesresources) {
                    $scope.suppliesresources = suppliesresources;
                });
            };
            
         
        }
    ]);

});
