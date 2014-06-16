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
            $scope.findOne = function() {
                InitiateEventFactory.get({
                    initiateEventId: $stateParams.initiateEventId      
                               
                }, function(initiateevent) {
                    $scope.initiateevent = initiateevent;            
                });
            };
           
            $scope.all = function() {
                InitiateEventFactory.query(function(initiateevents) {
                    //$scope.initiateevents = initiateevents;
                    
                    $scope.purchasedSupplies = initiateevents[0].purchased_supplies;
                    $scope.reservedSupplies = initiateevents[0].reserved_supplies;
                    //console.log($scope.initiateevents);
                    //$scope.initiateevent.reserved_supplies = $scope.reserved_supplies;
                });
            };
          
        }
    ]);

});
