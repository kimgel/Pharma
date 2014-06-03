'use strict'; 

define(['app', 'SuppliesResources'], function(app, SuppliesResources) {
    app.controller('SuppliesResourceList', [
        '$scope', 
        '$location',
        'SuppliesResourceFactory', 
        function($scope, $location, SuppliesResourceFactory) {
            $scope.all = function() {
                SuppliesResourceFactory.query(function(suppliesresources) {
                    $scope.suppliesresources = suppliesresources;
                });
            };
            $scope.parseInt = parseInt;
        }
    ]);
});
