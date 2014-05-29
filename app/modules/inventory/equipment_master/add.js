'use strict';

define(['app', 'EquipmentResources'], function(app, EquipmentResources) {
    app.controller('EquipmentResourceCtrl', [
        '$scope',
        '$state',
        'EquipmentResourceFactory',
        function($scope, $state, EquipmentResourceFactory) {

            $scope.equipmentresource = {};
            $scope.submit = function(form) {
                EquipmentResourceFactory.save($scope.equipmentresource, function(err) {
                    if (err.errors) {
                        for (var key in err.errors) {
                            form[key].message = err.errors[key].message;
                        }
                    }else{
                        $state.go('equipment_master');
                    }
                });
            };
            $scope.clear = function() {
                $scope.equipmentresource = angular.copy({});
            };
        }
    ]);

});
