'use strict';

define([
    'app',
    'Initiateevents',
], function(app, Initiateevents) {
    app.controller('SelectedSupplies', [
        '$scope',
        '$location', 
        '$stateParams',
        'InitiateEventFactory',
        function(
            $scope,
            $location, $stateParams,
            InitiateEventFactory
        ) {
            $scope.initiateevent = {};

            $scope.reservedSupplies = [];
            $scope.initiateevent.reserved_supplies = $scope.reservedSupplies;

            $scope.purchasedSupplies = [];
            $scope.initiateevent.purchased_supplies = $scope.purchasedSupplies;

            $scope.view = false;

            $scope.findOne = function() {
                InitiateEventFactory.get({
                    initiateEventId: $stateParams.initiateEventId      
                               
                }, function(initiateevent) {
                    $scope.initiateevent = initiateevent;     
                    $scope.reservedSupplies = initiateevent.reserved_supplies;
                    $scope.purchasedSupplies = initiateevent.purchased_supplies;       
                });
            };
           
          
        }
    ]);

});
