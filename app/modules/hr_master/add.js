'use strict';

define(['app', 'HumanResources'], function(app, HumanResources) {
    app.controller('HumanResourceCtrl', [
        '$scope',
        '$state',
        'HumanResourceFactory',
        function($scope, $state, HumanResourceFactory) {

            $scope.humanresource = {};
            $scope.submit = function(form) {
                HumanResourceFactory.save($scope.humanresource, function(err) {
                    if (err.errors) {
                        for (var key in err.errors) {
                            form[key].message = err.errors[key].message;
                        }
                    }else{
                        $state.go('hr_master');
                    }
                });
            };
            $scope.clear = function() {
                $scope.humanresource = angular.copy({});
            };
        }
    ]);

});
