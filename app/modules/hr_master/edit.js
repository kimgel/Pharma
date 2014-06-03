'use strict';

define(['app', 'HumanResources'], function(app, HumanResources) {
    app.controller('HumanResourceEditCtrl', [
        '$scope',
        '$state',
        '$stateParams',
        'HumanResourceFactory',
        function($scope, $state, $stateParams, HumanResourceFactory) {            
            $scope.update = function(form) {            
                var updateHumanResources = $scope.humanresource;
                HumanResourceFactory.update($scope.humanresource, function(err) {
                    if (err.errors) {
                        for (var key in err.errors) {
                            form[key].message = err.errors[key].message;
                        }
                    }else{
                        $state.go('hr_master');
                    }
                });
            };

            $scope.findOne = function() {
                HumanResourceFactory.get({
                    humanResourceId: $stateParams.humanResourceId
                }, function(humanresource) {
                    $scope.humanresource = humanresource;
                });
            };
        }
    ]);
});
