'use strict';

define([
    'app',
    'SuppliesResources',
    'Initiateevents'
], function(app, Initiateevents) {
    app.controller('SelectedSupplies', [
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
            //$scope.reserved_supplies = []; //for initiate event reserved supplies array
           // $scope.view = false;

            //$scope.initiateevent.reserved_supplies = $scope.reserved_supplies;
                        
            $scope.all = function() {
                
                /*SuppliesResourceFactory.query(function(suppliesresources) {
                    $scope.suppliesresources = suppliesresources;
                });*/

                InitiateEventFactory.query(function(initiateevents) {
                    $scope.reservedSupplies = initiateevents[0].reserved_supplies;
                });
            };

        }
    ]);

});
