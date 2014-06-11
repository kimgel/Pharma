'use strict';

define([
    'app',
    'HumanResources',
    'Initiateevents',
], function(app, HumanResources, Initiateevents) {
    app.controller('ReserveHr', [
        '$scope',
        '$state',
        'HumanResourceFactory',
        'InitiateEventFactory',
        function(
            $scope,
            $state,
            HumanResourceFactory,
            InitiateEventFactory
        ) {/*
            

            $scope.update = function(form) {
                $scope.humanresource.assigned_events = $scope.assigned_events;
                $scope.initiateevent.eventnum = $scope.eventnum;
                $scope.assigned_events =  $scope.eventnum;
    //$scope.initiateevent.eventnum = $scope.humanresource.assigned_events;  
    //$scope.humanresource.assigned_events = $scope.initiateevent.eventnum;

                var updateHumanResource = $scope.humanresources;
                HumanResourceFactory.update($scope.humanresource, function(err) {
                    if (err.errors) {
                        for (var key in err.errors) {
                            form[key].message = err.errors[key].message;
                        }
                    }else{
                        $state.go('reserve_hr');
                    }
                });
            };*/

            
            $scope.all = function() {
                
                HumanResourceFactory.query(function(humanresources) {
                    $scope.humanresources = humanresources;
                   // $scope.initiateevent.eventtypes = $scope.eventtypes[0]._id;
                   // console.log($scope.initiateevents);
                });
                InitiateEventFactory.query(function(initiateevents) {
                    $scope.initiateevents = initiateevents;
                    //console.log($scope.eventtypes);
                });
            };

          
        }
    ]);

});
