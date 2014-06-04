'use strict';

define(['app', 'HumanResources'], function(app, HumanResources) {
    app.controller('HumanResourceViewCtrl', [
        '$scope',
        '$location', 
        '$stateParams',
        'HumanResourceFactory',
        function($scope, $location, $stateParams, HumanResourceFactory) {
            $scope.findOne = function() {
                HumanResourceFactory.get({
                    humanResourceId: $stateParams.humanResourceId      
                               
                }, function(humanresources) {
                    $scope.humanresources = humanresources;              
                });
            };
        }
    ]);
});
