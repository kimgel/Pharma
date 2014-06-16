'use strict';

define([
    'app',
    'SuppliesResources',
    'Initiateevents'
], function(app, Initiateevents) {
    app.controller('PurchaseSupplies', [
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
                                   
            $scope.all = function() {
                
                InitiateEventFactory.query(function(initiateevents) {
                    $scope.purchasedSupplies = initiateevents[0].purchased_supplies;
                });
            };

        }
    ]);

});
