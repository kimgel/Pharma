'use strict';

define([
    'app',
    'EquipmentResources',
], function(app, EquipmentResources) {
    app.controller('ReserveEquipmentView', [
        '$scope',
        '$location', 
        '$stateParams',
        'EquipmentResourceFactory',
        function(
            $scope,
            $location, $stateParams,
            EquipmentResourceFactory
        ) {
            $scope.findOne = function() {
                EquipmentResourceFactory.get({
                    equipmentResourceId: $stateParams.equipmentResourceId      
                               
                }, function(equipmentresources) {
                    $scope.equipmentresources = equipmentresources;              
                });
            };
           

          
        }
    ]);

});
