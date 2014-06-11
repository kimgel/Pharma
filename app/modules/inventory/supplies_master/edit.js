'use strict';

define(['app', 'SuppliesResources'], function(app, SuppliesResources) {
    app.controller('SuppliesResourceEditCtrl', [
        '$rootScope',
        '$scope',
        '$state',
        '$stateParams',
        'SuppliesResourceFactory',
        function($rootScope,$scope, $state, $stateParams, SuppliesResourceFactory) {            
            $scope.update = function(form) {  
                var currentUser = $rootScope.currentUser;
                
                $scope.suppliesresource.modified_by = currentUser.userId;

                var updateSupplies = $scope.suppliesresource;
                SuppliesResourceFactory.update($scope.suppliesresource, function(err) {
                    if (err.errors) {
                        for (var key in err.errors) {
                            form[key].message = err.errors[key].message;
                        }
                    }else{
                        $state.go('supplies_master');
                    }
                });
            };

            $scope.findOne = function() {                
                SuppliesResourceFactory.get({
                    suppliesResourceId: $stateParams.suppliesResourceId
                }, function(suppliesresource) {
                    $scope.suppliesresource = suppliesresource;
                });
            };
        }
    ]);
});
