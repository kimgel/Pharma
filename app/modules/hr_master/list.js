'use strict';

define(['app', 'HumanResources'], function(app, HumanResources) {
    app.controller('HumanResourceList', [
        '$scope',
        '$location',
        'HumanResourceFactory',
        function($scope, $location, HumanResourceFactory) {
            $scope.all = function() {
                HumanResourceFactory.query(function(humanresources) {
                    $scope.humanresources = humanresources;
                });
            };
        }
    ]);
});
