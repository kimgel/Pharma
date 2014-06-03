'use strict';

define(['app', 'EquipmentResources'], function(app, EquipmentResources) {
    app.controller('EquipmentResourceEditCtrl', [
        '$scope',
        '$state',
        '$stateParams',
        'EquipmentResourceFactory',
        function($scope, $state, $stateParams, EquipmentResourceFactory) {            
            $scope.update = function(form) {            
                var updateEquipment = $scope.equipmentresource;
                EquipmentResourceFactory.update($scope.equipmentresource, function(err) {
                    if (err.errors) {
                        for (var key in err.errors) {
                            form[key].message = err.errors[key].message;
                        }
                    }else{
                        $state.go('equipment_master');
                    }
                });
            };

            $scope.findOne = function() {
                EquipmentResourceFactory.get({
                    equipmentResourceId: $stateParams.equipmentResourceId
                }, function(equipmentresource) {
                    $scope.equipmentresource = equipmentresource;
                });
            };
        }
    ]);
});
