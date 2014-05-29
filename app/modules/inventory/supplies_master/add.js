'use strict';

define(['app', 'SuppliesResources'], function(app, SuppliesResources) {
    app.controller('SuppliesResourceCtrl', [
        '$scope',
        '$state',
        'SuppliesResourceFactory',
        function($scope, $state, SuppliesResourceFactory) {

            $scope.suppliesresource = {};
            $scope.submit = function(form) {
                SuppliesResourceFactory.save($scope.suppliesresource, function(err) {
                    if (err.errors) {
                        for (var key in err.errors) {
                            form[key].message = err.errors[key].message;
                        }
                    }else{
                        $state.go('supplies_master');
                    }
                });
            };
            $scope.clear = function() {
                $scope.suppliesresource = angular.copy({});
            };
        }
    ]);

});
