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
            $scope.reservedSupplies = []; //for initiate event reserved supplies array
            $scope.view = false;

            $scope.initiateevent.reserved_supplies = $scope.reservedSupplies;
            $scope.findOne = function() {
                //getone
                InitiateEventFactory.get({
                    initiateEventId: $stateParams.initiateEventId      
                               
                }, function(initiateevent) {
                    $scope.initiateevent = initiateevent;  
                    $scope.reservedSupplies = initiateevent.reserved_supplies;       
                });
                //get supplies
                SuppliesResourceFactory.query(function(suppliesresources) {
                    $scope.suppliesresources = suppliesresources;

                });

            }; 
            
         
        }
    ]);

});
