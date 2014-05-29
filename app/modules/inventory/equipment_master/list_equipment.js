'use strict'; 

define(['app', 'EquipmentResources'], function(app, EquipmentResources) {
    app.controller('EquipmentResourceList', [
        '$scope',
        '$location',
        'EquipmentResourceFactory', 
        function($scope, $location, EquipmentResourceFactory) {
            $scope.all = function() {
                EquipmentResourceFactory.query(function(equipmentresources) {
                    $scope.equipmentresources = equipmentresources;
                });
            };
        }
    ]);
});
