'use strict';

define(['app', 'Initiateevents'], function(app, Initiateevents) {
    app.controller('InitiateEventEditCtrl', [
        '$scope',
        '$state',
        '$stateParams',
        'InitiateEventFactory',
        function($scope, $state, $stateParams, InitiateEventFactory) {            
            $scope.update = function(form) {            
                var updateInitiateEvent = $scope.initiateevents;
                InitiateEventFactory.update($scope.initiateevent, function(err) {
                    if (err.errors) {
                        for (var key in err.errors) {
                            form[key].message = err.errors[key].message;
                        }
                    }else{
                        $state.go('propose_event');
                    }
                });
            };

            $scope.findOne = function() {
                InitiateEventFactory.get({
                    initiateEventId: $stateParams.initiateEventId
                }, function(initiateevent) {
                    $scope.initiateevent = initiateevent;
                });
            };
        }
    ]);
});