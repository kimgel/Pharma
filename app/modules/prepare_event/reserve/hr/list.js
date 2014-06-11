'use strict';

define([
    'app',
    'HumanResources',
], function(app, HumanResources) {
    app.controller('ReserveHr', [
        '$scope',
        '$state',
        'HumanResourceFactory',
        function(
            $scope,
            $state,
            HumanResourceFactory
        ) {

           // $scope.view = false;
            
            $scope.all = function() {
                
                HumanResourceFactory.query(function(humanresources) {
                    $scope.humanresources = humanresources;
                   // $scope.initiateevent.eventtypes = $scope.eventtypes[0]._id;
                   // console.log($scope.initiateevents);
                });
            };

          
        }
    ]);

});
