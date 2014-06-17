'use strict';

define([
    'app',
    'SuppliesResources',
    'Initiateevents'
], function(app, Initiateevents) {
    app.controller('PurchaseSupplies', [
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
            $scope.purchasedSupplies = [];
            $scope.initiateevent.purchased_supplies = $scope.purchasedSupplies;
                                   
            $scope.view = false;

            $scope.findOne = function() {
                InitiateEventFactory.get({
                    initiateEventId: $stateParams.initiateEventId      
                               
                }, function(initiateevent) {
                    $scope.initiateevent = initiateevent;     
                    $scope.purchasedSupplies = initiateevent.purchased_supplies;       
                });
            };

        }
    ]);

});
