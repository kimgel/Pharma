'use strict';

define([
    'app',
    'EquipmentResources',
], function(app, EquipmentResources) {
    app.controller('SelectedEquipment', [
        '$scope',
        '$state',
        'EquipmentResourceFactory',
        function(
            $scope,
            $state,
            EquipmentResourceFactory
        ) {

           // $scope.view = false;
            
            $scope.all = function() {
                
                EquipmentResourceFactory.query(function(equipmentresources) {
                    $scope.equipmentresources = equipmentresources;
                   // $scope.initiateevent.eventtypes = $scope.eventtypes[0]._id;
                   // console.log($scope.initiateevents);
                });
            };

          
        }
    ]);

});
