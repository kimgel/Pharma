'use strict';

define([
    'app',
    'SuppliesResources',
    'Initiateevents'
], function(app, SuppliesResources) {
    app.controller('ReserveSupplies', [
        '$scope',
        '$state',
        'SuppliesResourceFactory',
        'InitiateEventFactory',
        function(
            $scope,
            $state,
            SuppliesResourceFactory, 
            InitiateEventFactory
        ) {
            $scope.initiateevent = {};
            $scope.reserved_supplies = []; //for initiate event reserved supplies array
            $scope.view = false;

            $scope.initiateevent.reserved_supplies = $scope.reserved_supplies;
            
            $scope.submit = function(form){
                //if (name) {
                    $scope.reserved_supplies.push({
                        name:name,
                       //qtyreserved:qtyreserved
                    });
                //} 
            };
            
            $scope.all = function() {
                
                SuppliesResourceFactory.query(function(suppliesresources) {
                    $scope.suppliesresources = suppliesresources;
                });
                InitiateEventFactory.query(function(initiateevents) {
                    $scope.initiateevents = initiateevents;
                    $scope.initiateevent.reserved_supplies = $scope.reserved_supplies;
                });
            };

////


///


          
        }
    ]);

});
