'use strict';

define(['app', 'SuppliesResources'], function(app, SuppliesResources) {
    app.controller('SuppliesResourceViewCtrl', [
        '$scope',
        '$location',  
        '$stateParams',
        'SuppliesResourceFactory',
        function($scope, $location, $stateParams, SuppliesResourceFactory) {
            $scope.findOne = function() {
                SuppliesResourceFactory.get({
                    suppliesResourceId: $stateParams.suppliesResourceId      
                               
                }, function(suppliesresources) {
                    $scope.suppliesresources = suppliesresources;              
                });
            };
        }
    ]);
});
