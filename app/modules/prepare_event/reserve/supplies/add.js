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
            $scope.reserved_supplies = []; //for initiate event reserved supplies array
            $scope.view = false;

           
            $scope.submit = function(form){
                    $scope.reserved_supplies.push({
                        name: name,
                        qty: qty
                    });
            };


            $scope.all = function() {
                
                SuppliesResourceFactory.query(function(suppliesresources) {
                    $scope.suppliesresources = suppliesresources;
                });
            };

          
        }
    ]);

});
